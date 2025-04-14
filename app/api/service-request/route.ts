import { NextResponse } from 'next/server';
import { db } from '@/app/api/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

// Define a type for the service request object with the new "declined" status
interface ServiceRequest {
  subService: string;
  email: string;
  message: string;
  requestedAt: string;
  status: 'pending' | 'processed' | 'declined';
}

// Simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    // Simulate processing time
    await delay(1000);

    // Parse request body
    const body = await request.json();
    const { subService, email, message } = body;

    // Validate input
    if (!subService || !email || !message) {
      return NextResponse.json(
        { error: 'All fields (subService, email, message) are required.' },
        { status: 400 }
      );
    }

    // Check if a similar (same subService) request from the same email exists and is still pending
    const snapshot = await db.ref('serviceRequests')
      .orderByChild('email')
      .equalTo(email)
      .once('value');

    if (snapshot.exists()) {
      const existingRequests = Object.values(snapshot.val()) as ServiceRequest[];
      const pendingRequest = existingRequests.find(req => req.subService === subService && req.status === 'pending');
      
      if (pendingRequest) {
        return NextResponse.json(
          { error: 'Your service request is still under review.' },
          { status: 400 }
        );
      }
    }

    // Generate a unique ID for the request
    const requestId = uuidv4();

    // Construct the service request object
    const serviceRequest: ServiceRequest = {
      subService,
      email,
      message,
      requestedAt: new Date().toISOString(),
      status: 'pending',
    };

    // Simulate a random error (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Simulated server error');
    }

    // Save the service request to Firebase
    await db.ref(`serviceRequests/${requestId}`).set(serviceRequest);

    return NextResponse.json(
      {
        message: 'Service request submitted successfully',
        requestId,
        serviceRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing service request:', error);

    return NextResponse.json(
      { error: 'Failed to submit service request. Please try again later.' },
      { status: 500 }
    );
  }
}
