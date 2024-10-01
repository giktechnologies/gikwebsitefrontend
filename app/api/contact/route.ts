import { NextResponse } from 'next/server';
import { db } from '@/app/api/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

// Simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    // Simulate processing time
    await delay(1000);

    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the request body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Create a unique ticket ID
    const ticketId = uuidv4();

    // Set the message ticket data
    const messageTicket = {
      name,
      email,
      message,
      seen: false,
      reply: null,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };

    // Simulate a random error (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Simulated server error');
    }

    // Save the ticket to Firebase Realtime Database
    await db.ref(`messageTickets/${ticketId}`).set(messageTicket);

    // Simulate successful submission
    return NextResponse.json(
      { 
        message: 'Message ticket created successfully',
        ticketId,
        submission: {
          name,
          email,
          message: message.substring(0, 20) + '...' // Truncate for privacy
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing contact submission:', error);

    if (error instanceof Error) {
      if (error.message === 'Simulated server error') {
        return NextResponse.json(
          { error: 'An unexpected error occurred. Please try again later.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to create message ticket. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}