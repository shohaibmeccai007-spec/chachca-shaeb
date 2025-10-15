const CancellationPage = () => {
  return (
    <div className="md:px-[15%] px-[10%] py-20">
      <div>
        <div className="container flex flex-col gap-4">
          <h1 className="policy-title text-3xl head1 font-bold text-center">
            Cancellation & Refund Policy 2025
          </h1>
          <p className="policy-text text-para para2">
            At <strong>Flable.ai</strong>, we value your satisfaction and strive
            to provide a seamless experience. This policy outlines our
            guidelines for subscription cancellations and refunds.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            1. Subscription Cancellation
          </h2>
          <p className="policy-text text-para para2">
            You can cancel your Flable.ai subscription at any time.
          </p>
          <ul className="policy-list list-disc list-outside ml-5">
            <li className="policy-item">
              <strong>Monthly Plans:</strong> Cancellation takes effect at the
              end of the current billing cycle. No further charges will apply.
            </li>
            <li className="policy-item">
              <strong>Annual Plans:</strong> Cancellation stops future renewals,
              but access continues till end of billing period. Partial refunds
              not provided unless eligible.
            </li>
          </ul>

          <p className="policy-text text-para para2">
            To cancel, email{" "}
            <a href="mailto:sales@flable.ai" className="policy-link text-bu">
              sales@flable.ai
            </a>{" "}
            with:
          </p>
          <ul className="policy-list list-disc list-outside ml-5">
            <li className="policy-item">Your account details</li>
            <li className="policy-item">Reason for the refund request</li>
            <li className="policy-item">Any relevant documentation</li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            2. Refund Policy
          </h2>
          <p className="policy-text text-para para2">
            We offer refunds in specific cases:
          </p>

          <h3 className="policy-subheading">Eligible Refunds</h3>
          <ul className="policy-list list-disc list-outside ml-5">
            <li className="policy-item">
              <strong>Technical Issues:</strong> If Flable.ai fails due to
              technical reasons on our end unresolved within 15 business days.
            </li>
            <li className="policy-item">
              <strong>Accidental Charges:</strong> Notify us within 7 days for a
              refund request.
            </li>
          </ul>

          <h3 className="policy-subheading">Non-Refundable Cases</h3>
          <ul className="policy-list list-disc list-outside ml-5">
            <li className="policy-item">
              No refunds for change of mind or unused subscriptions.
            </li>
            <li className="policy-item">
              No refunds for trial periods, promotional offers, or discounted
              plans.
            </li>
            <li className="policy-item">
              No refunds if user violates Terms of Service.
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            3. Requesting a Refund
          </h2>
          <p className="policy-text text-para para2">
            To request a refund, email{" "}
            <a href="mailto:sales@flable.ai" className="policy-link text-bu">
              sales@flable.ai
            </a>{" "}
            with:
          </p>
          <ul className="policy-list list-disc list-outside ml-5">
            <li className="policy-item">Your account details</li>
            <li className="policy-item">Reason for the refund request</li>
            <li className="policy-item">Any relevant documentation</li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            4. Processing Time
          </h2>
          <p className="policy-text text-para para2">
            Approved refunds will be processed within{" "}
            <strong>5-10 business days</strong> and credited to your original
            payment method.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            5. Policy Updates
          </h2>
          <p className="policy-text text-para para2">
            Flable.ai may update this policy at any time. Significant changes
            will be communicated via email or in-app notification.
          </p>

          <p className="policy-text text-para para2">
            For any questions, reach out to{" "}
            <a href="mailto:sales@flable.ai" className="policy-link text-bu">
              sales@flable.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;
