/**
 * @jest-environment node
 *  
 */
import { createPaymentIntent } from "@/lib/externalRequests/stripe";
import { describe, expect, test, it } from '@jest/globals';

describe('Testing sendgrid endpoint', () => {

    it('Create Client Secret for checkout form', async () => {
      const resp =await createPaymentIntent({price:1000, currency:'usd', description:'test payment intent',metadata: {'test': 'data'}})
      expect(resp.amount).toBe(1000);
    });
  
    
  
  });
  