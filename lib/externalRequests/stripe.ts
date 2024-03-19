import stripe from "stripe";
const client = new stripe(process.env.STRIPE_API_KEY as string)
const endpointSecret = process.env.STRIPE_WEB_SECRET as string
const startDate = new Date("2023-11-01"); // Start date of the trial
const currentDate = new Date(); // Current date
const endDate = new Date("2024-01-01")
const remainingDays = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24),
);

// endDate.setDate(startDate.getDate() + 60); // End date of the trial

// console.log(startDate.toTimeString(), startDate.getTime());

export async function verifyWebhook(signature: string, body: string | Buffer) {
    const event = client.webhooks.constructEvent(
        body,
        signature,
        endpointSecret
    )
    return event
}

export async function processStripeEvent(event: stripe.Event) {

    if (event.type === 'payment_intent.succeeded' && event.data.object['metadata']) {
        // code to process successful payment 
    }

}


export async function createPaymentIntent({ price,currency, description, metadata }: { price: number, currency: string , description: string, metadata?: Record<string, string> }) {

    const paymentIntent = await client.paymentIntents.create({

        amount: price!,
        currency: currency,
        description: description,
        metadata: metadata,
        payment_method_types: [
            'card',
            'cashapp',
            'afterpay_clearpay',
            'klarna'

        ]

    });
    return paymentIntent

}




export async function getPrice(id: string) {
    const price = await client.prices.retrieve(id, { expand: ['product'] });
    const product = price.product as stripe.Product;
    return { price: price.unit_amount, description: product.description, name: product.name };

}

export async function getIntent(id: string) {
    const intent = await client.setupIntents.retrieve(id);
    return intent
}

export async function getInvoices(id: string) {
    const invoice = await client.setupIntents.retrieve(id);
    return invoice
}


export async function updatePaymentMethod(customerId: string, paymentMethodId: string) {
    await client.paymentMethods.attach(paymentMethodId, {
        customer: customerId

    })
}

export async function getCustomer(id: string) {

    const customer = await client.customers.retrieve(id)
    //console.log(customer);
    return customer as stripe.Customer

}

export async function isSubscritpionActive(id: string) {
    const subscription = await client.subscriptions.retrieve(id);
    return subscription.status === 'active' || subscription.status === 'trialing'
}

