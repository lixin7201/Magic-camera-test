/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import type { Locale } from "@/i18n.config";

export async function generateMetadata({
  params
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });

  return {
    title: t('terms.title'),
    description: t('terms.description'),
    openGraph: {
      images: [t('terms.ogImage')],
    },
  };
}

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Magic Camera Terms of Service</h1>

        <p className="text-muted-foreground mb-8">
          Effective Date: November 14, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Magic Camera ("Magic Camera", "we", "our", or "us"). These Terms of Service ("Terms") govern your use of our AI-powered image generation platform and services (collectively, the "Service") located at magiccamera.ai and related domains.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service. These Terms specifically govern the use of our credit-based AI image generation system and all related features.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            Magic Camera provides a credit-based AI image generation service that allows users to create, edit, and enhance images using advanced artificial intelligence technology. Our Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered image generation and editing tools</li>
            <li>Credit-based access system for AI services</li>
            <li>Subscription plans and one-time credit packages</li>
            <li>User account management and credit balance tracking</li>
            <li>Generation history and result storage</li>
            <li>Customer support and account services</li>
          </ul>
          <p className="mt-4">
            All AI generation services are accessed through a virtual credit system. Users must purchase or earn credits to utilize the Service's core features.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p>
            To access certain features of our Service, you may be required to create an account. When creating an account, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Promptly update your account information to keep it accurate</li>
            <li>Accept all risks of unauthorized access to your account</li>
            <li>Be at least 18 years old or the age of legal consent in your jurisdiction</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Credit Account Management</h3>
          <p>
            Your Magic Camera account includes a virtual credit balance that is used to access AI generation services. By creating an account, you acknowledge and agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain sole responsibility for monitoring your credit balance</li>
            <li>Ensure sufficient credits are available before initiating AI generation requests</li>
            <li>Accept that credits are non-transferable between accounts</li>
            <li>Understand that credits have no cash value and cannot be exchanged for currency</li>
            <li>Acknowledge that credit balances may be displayed with slight delays due to system processing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Security and Credit Protection</h3>
          <p>
            You are responsible for all credit usage and transactions associated with your account, including any unauthorized use resulting from failure to maintain account security. We strongly recommend:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using strong, unique passwords for your account</li>
            <li>Enabling two-factor authentication when available</li>
            <li>Regularly monitoring your credit balance and transaction history</li>
            <li>Immediately reporting any suspicious account activity or unauthorized credit usage</li>
          </ul>

          <p className="mt-4">
            We reserve the right to refuse service, terminate accounts, suspend credit usage, or remove content at our sole discretion, particularly in cases of suspected fraud, abuse, or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Engage in any activity that disrupts or interferes with the Service</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Violate any applicable laws in your jurisdiction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
          <p className="mt-4">
            You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with operating and providing the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment Terms and Credit System</h2>
          <p>
            Magic Camera operates on a credit-based payment model. All payments are processed exclusively for the purchase of virtual credits that provide access to our AI generation services:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Credit Purchase Methods</h3>
          <p>
            Credits may be purchased through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Subscription Plans:</strong> Monthly ($29-$99) and yearly ($290-$990) recurring plans with automatic credit allocation</li>
            <li><strong>One-Time Credit Packs:</strong> Single purchase options (e.g., 200 credits for $5)</li>
            <li><strong>Secure Payment Processing:</strong> All transactions processed through PCI-compliant third-party payment providers</li>
            <li><strong>Multiple Payment Methods:</strong> Credit cards, debit cards, and other supported payment methods</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Payment Terms and Conditions</h3>
          <p>
            By purchasing credits, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pay all applicable fees as described at time of purchase</li>
            <li>Accept that all credit purchases are final and non-refundable</li>
            <li>Acknowledge that credits have no cash value and cannot be exchanged for currency</li>
            <li>Understand that subscription plans automatically renew unless cancelled</li>
            <li>Be responsible for all applicable taxes and fees</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Subscription Billing</h3>
          <p>
            Subscription plans include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing cycle</li>
            <li><strong>Credit Allocation:</strong> Credits are granted automatically upon successful payment</li>
            <li><strong>Yearly Plan Installments:</strong> Yearly subscriptions distribute credits monthly rather than all at once</li>
            <li><strong>Cancellation Policy:</strong> Cancellations take effect at the end of the current billing period</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">6.4 Failed Payments and Account Suspension</h3>
          <p>
            In the event of payment failure:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to premium features may be suspended until payment is resolved</li>
            <li>Subscription credits may be temporarily withheld</li>
            <li>Accounts may be terminated after repeated payment failures</li>
            <li>Any outstanding credit balance remains subject to these Terms</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">6.5 Chargebacks and Payment Disputes</h3>
          <p>
            Initiating a chargeback or payment dispute without first contacting our support team constitutes a breach of these Terms. In such cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your account may be immediately suspended</li>
            <li>Any associated credits may be frozen</li>
            <li>You remain liable for all fees plus any chargeback penalties</li>
            <li>We reserve the right to pursue collection of disputed amounts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mt-4">
            IN NO EVENT SHALL MAGIC CAMERA, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, INCLUDING DAMAGES RELATED TO CREDIT PURCHASES, CONSUMPTION, OR LOSS OF ACCESS TO AI GENERATION SERVICES.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless [Your Company Name] and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mt-4">
            Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including but not limited to credit system policies, payment obligations, and intellectual property rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Credit System Policy</h2>
          <p>
            Magic Camera operates on a virtual credit system. The following terms specifically govern the purchase, use, and management of credits within our Service:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Nature of Credits</h3>
          <p>
            Credits are virtual digital tokens that provide access to Magic Camera's AI generation services. Credits:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Have no monetary value and cannot be exchanged for cash or currency</li>
            <li>Are non-transferable between user accounts</li>
            <li>Do not expire unless specifically stated at time of purchase</li>
            <li>Are consumed immediately upon use for AI generation services</li>
            <li>Cannot be shared, sold, or traded with other users</li>
            <li>Remain tied to the account that purchased or earned them</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Credit Purchase and Pricing</h3>
          <p>
            Credits may be obtained through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Subscription Plans:</strong> Monthly or yearly recurring plans that grant credits on a regular basis</li>
            <li><strong>One-Time Credit Packs:</strong> Single purchase packages providing a fixed number of credits</li>
            <li><strong>Promotional Credits:</strong> Bonus credits awarded through special offers or referral programs</li>
            <li><strong>Registration Bonuses:</strong> Initial credits granted upon account creation</li>
          </ul>
          <p className="mt-4">
            All credit purchases are final and non-refundable except as explicitly required by law or as stated in our Refund Policy. Pricing is subject to change with prior notice. We reserve the right to modify credit consumption rates for different AI services.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Credit Usage and Consumption</h3>
          <p>
            Credit consumption varies by service type and complexity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>AI Image Generation:</strong> Typically consumes 10-50 credits per generation</li>
            <li><strong>AI Image Editing:</strong> Consumption varies based on edit complexity</li>
            <li><strong>AI Video Generation:</strong> Consumes significantly more credits due to computational requirements</li>
            <li><strong>AI Chat/Assistant:</strong> Consumes credits per message or conversation</li>
          </ul>
          <p className="mt-4">
            Specific credit costs are displayed within the Service interface before you confirm any AI generation request. By confirming a generation request, you agree to the specified credit consumption.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.4 Credit Balance Management</h3>
          <p>
            You are solely responsible for monitoring your credit balance and ensuring sufficient credits are available for desired services. We provide:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time credit balance display in your account dashboard</li>
            <li>Credit transaction history and usage logs</li>
            <li>Low balance notifications (when enabled)</li>
            <li>Automated credit top-up options (when configured)</li>
          </ul>
          <p className="mt-4">
            We are not liable for any inability to access services due to insufficient credit balances, including missed opportunities or deadlines.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.5 Non-Refundable Policy</h3>
          <p>
            <strong>ALL CREDIT PURCHASES ARE FINAL AND NON-REFUNDABLE.</strong> This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unused credits remaining in your account</li>
            <li>Credits consumed for unsatisfactory AI generations</li>
            <li>Credits consumed for failed or incomplete generations</li>
            <li>Credits consumed due to user error or misunderstanding</li>
            <li>Credits lost due to account termination for Terms violations</li>
          </ul>
          <p className="mt-4">
            The only exceptions to this non-refundable policy are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technical failures on our part that result in credit consumption without service delivery</li>
            <li>Fraudulent or unauthorized transactions (subject to investigation)</li>
            <li>Legal requirements in specific jurisdictions that mandate refunds</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.6 Credit Expiration</h3>
          <p>
            Credits generally do not expire. However, we reserve the right to implement expiration policies with reasonable advance notice. Credits obtained through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Subscription Plans:</strong> May have monthly usage requirements or rollover limitations</li>
            <li><strong>Promotional Credits:</strong> May have specific expiration dates as stated at time of award</li>
            <li><strong>Bonus Credits:</strong> May expire if account remains inactive for extended periods</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.7 Credit System Modifications</h3>
          <p>
            We reserve the right to modify credit pricing, consumption rates, and system mechanics with reasonable advance notice. Such modifications may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adjusting credit costs for specific AI services</li>
            <li>Modifying subscription plan credit allocations</li>
            <li>Implementing new credit earning or bonus mechanisms</li>
            <li>Adjusting promotional credit policies</li>
          </ul>
          <p className="mt-4">
            We will provide notice of material changes through email, in-app notifications, or prominent website announcements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Magic Camera and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms, your use of the Service, or your credit transactions and account activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms, engage in fraudulent credit transactions, or violate our credit system policies.
          </p>
          <p className="mt-4">
            Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including but not limited to credit system policies, payment obligations, and intellectual property rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Privacy Policy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices, including how we handle payment information and credit transaction data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect, particularly for changes affecting credit pricing, consumption rates, or refund policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in courts located in Delaware, and you consent to the personal jurisdiction and venue of such courts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
          <p>
            If you have any questions about these Terms, credit system policies, or any aspect of our Service, please contact us at:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Email:</strong> legal@magiccamera.ai</li>
            <li><strong>Website:</strong> https://magiccamera.ai/support</li>
            <li><strong>Support:</strong> support@magiccamera.ai</li>
            <li><strong>Business Address:</strong> Magic Camera, Inc., 8 The Green, Suite 13887, Dover, DE 19901, United States</li>
          </ul>
          <p className="mt-4">
            For credit-related inquiries, billing issues, or refund requests (where applicable), please contact our billing support team at billing@magiccamera.ai.
          </p>
        </section>
      </div>
    </div>
  );
}
