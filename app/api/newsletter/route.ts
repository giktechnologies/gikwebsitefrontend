import { NextResponse } from 'next/server';
import { db } from '@/app/api/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

// Define a type for the subscription object
interface Subscription {
  name: string;
  email: string;
  subscribedAt: string;
  subscribed: boolean;
}

// Simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    // Simulate processing time
    await delay(1000);

    // Parse the request body
    const body = await request.json();
    const { name, email } = body;

    // Validate the request body
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Check if the email already exists in the database
    const snapshot = await db.ref('newsletterSubscriptions').orderByChild('email').equalTo(email).once('value');

    if (snapshot.exists()) {
      const existingSubscription = Object.values(snapshot.val())[0] as Subscription; // Cast to Subscription type
      if (existingSubscription) {
        // If the user is already subscribed
        if (existingSubscription.subscribed) {
          return NextResponse.json(
            { error: 'Email is already subscribed.' },
            { status: 400 }
          );
        } else {
          return NextResponse.json(
            { error: 'Email already exists but is not subscribed.' },
            { status: 400 }
          );
        }
      }
    }

    // Create a unique subscription ID
    const subscriptionId = uuidv4();

    // Set the subscription data
    const subscription: Subscription = {
      name,
      email,
      subscribedAt: new Date().toISOString(),
      subscribed: true,
    };

    // Simulate a random error (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Simulated server error');
    }

    // Save the subscription to Firebase Realtime Database
    await db.ref(`newsletterSubscriptions/${subscriptionId}`).set(subscription);

    return NextResponse.json(
      {
        message: 'Newsletter subscription created successfully',
        subscriptionId,
        subscription: {
          name,
          email,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);

    return NextResponse.json(
      { error: 'Failed to create newsletter subscription. Please try again later.' },
      { status: 500 }
    );
  }
}
