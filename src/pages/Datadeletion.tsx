const DataDeletion = () => {
  return (
    <div className="md:px-[15%] px-[10%]">
      <div>
        <div className="container flex flex-col gap-4">
          <h1 className="policy-title text-head head1 font-bold text-center">
            Data Deletion Guideline
          </h1>

          <h2 className="policy-heading text-head text-xl font-bold">
            Applying Scope & Purpose of the Guideline
          </h2>
          <p className="policy-text text-para para2">
            This Data Deletion guideline aims to establish the criteria and
            procedures for the deletion of data held by FLABLE AI. This policy
            ensures compliance with data protection laws and regulations,
            minimizes risk associated with data breaches, and promotes efficient
            data management.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            Deletion Criteria
          </h2>

          <h3 className="policy-subheading">Non-Personal Data</h3>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>
              <strong>End of Business Purpose:</strong> Non-personal data should
              be deleted when it is no longer useful for the business purposes
              for which it was collected.
            </li>
            <li>
              <strong>Project Completion:</strong> Data collected for specific
              projects or analysis should be deleted upon the completion of the
              project or when the data is no longer needed for analysis.
            </li>
            <li>
              <strong>Storage Limitation:</strong> If the data was retained
              under a storage limitation policy (e.g., data is only kept for a
              certain number of years for historical analysis), it should be
              deleted accordingly.
            </li>
            <li>
              <strong>Legal and Regulatory Requirements:</strong> Like personal
              data, if there are specific legal or regulatory requirements that
              dictate the deletion of non-personal data, these must be adhered
              to.
            </li>
            <li>
              <strong>Policy Updates:</strong> If updates to data governance
              policies dictate that certain types of non-personal data are no
              longer retained, such data should be deleted in accordance with
              the updated policies.
            </li>
            <li>
              <strong>End of Retention Period:</strong> Data must be deleted
              after it reaches the end of its defined retention period as per
              the Data Retention Policy.
            </li>
            <li>
              <strong>No Longer Necessary:</strong> Data that is no longer
              necessary for the purpose for which it was collected.
            </li>
          </ul>

          <h3 className="policy-subheading">Personal Data</h3>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>
              <strong>End of Necessity:</strong> Personal data should be deleted
              when it is no longer necessary for the purposes for which it was
              collected or processed.
            </li>
            <li>
              <strong>Consent Withdrawal:</strong> If the processing of personal
              data is based on consent, the data must be deleted immediately
              upon the data subject withdrawing that consent.
            </li>
            <li>
              <strong>Expiration of Consent:</strong> If the consent has an
              expiration date and no other legal ground applies, the data must
              be deleted when the consent expires.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Personal data must be deleted
              if required by law, for instance, upon reaching the end of a
              legally mandated retention period.
            </li>
            <li>
              <strong>Request by Data Subject:</strong> If a data subject
              exercises its right to be forgotten under applicable data
              protection laws, the data must be deleted, provided that no legal
              grounds for retaining it exist.
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            Data Deletion Schedule
          </h2>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>
              <strong>Quarterly Deletion:</strong> Data flagged for deletion on
              a quarterly basis includes non-sensitive internal communications
              and temporary files.
            </li>
            <li>
              <strong>Annual Deletion:</strong> Sensitive data such as customer
              personal information, employee records, and project data are
              deleted annually after the retention period expires.
            </li>
            <li>
              <strong>Immediate Deletion:</strong> Personal data must be
              immediately deleted upon determination that it is no longer
              necessary for the purpose for which it was collected, or if the
              data subject has withdrawn consent and no legal obligation
              requires its retention.
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            Data Deletion Procedure
          </h2>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>
              <strong>Identification:</strong> FLABLE AI identifies the data
              eligible for deletion based on the Deletion Schedule.
            </li>
            <li>
              <strong>Verification:</strong> Data Landing zone lead verify and
              approve the list of data for deletion.
            </li>
            <li>
              <strong>Execution:</strong> IT department uses certified software
              tools to securely delete electronic data. The deletion process
              involves overwriting the data multiple times to prevent any
              possibility of recovery.
            </li>
            <li>
              <strong>Confirmation:</strong> A final check is performed to
              ensure data has been irretrievably deleted.
            </li>
            <li>
              <strong>Documentation:</strong> Each deletion action is
              documented, including the description of the deleted data, the
              date of deletion, the method used, and the personnel involved.
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            Unable to Define Periods
          </h2>
          <p className="policy-text text-para para2">
            If unable to determine the duration of data storage, we use the
            following to define the correct time:
          </p>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>The location where the data will be stored</li>
            <li>The type of data</li>
            <li>
              If the data is from a project, the contact details of the FLABLE
              AI lead
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            Data Subjects Deletion Requests
          </h2>
          <p className="policy-text text-para para2">
            Data Subjects are requested to send the request for deletion to{" "}
            <a href="mailto:admin@flable.ai" className="policy-link text-bu">
              admin@flable.ai
            </a>
            . All data deletion requests will be processed through this contact.
          </p>
          <p className="policy-text text-para para2">
            Any deletion request will be fully processed within{" "}
            <strong>10 working days</strong>. Once completed, a final
            confirmation will be sent to the data subject via the
            above-mentioned contact.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            Implementation Methods
          </h2>
          <p className="policy-text text-para para2">
            For personal data, we specify the server and country/region in which
            the data lake is located. If multiple storage locations exist, every
            storage location is specified. The Project management team ensures
            the deletion of the datasets once the datasets have achieved the
            purpose or are no longer in the scope of the business purpose
            immediately or within 90 days as per the use case.
          </p>
          <p className="policy-text text-para para2">
            Once the relevant results have been found, please record the storage
            period of the relevant data (within 90 days as per the use case).
            The relevant record sheet should be stored in the folder associated
            with the project/team.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            Special Domain Considerations
          </h2>
          <p className="policy-text text-para para2">
            If data is related to the following domains, respective retention
            schedules are always referred to as per legal requirements:
          </p>
          <ul className="policy-list list-disc list-outside ml-5">
            <li>
              <strong>Privacy, Accounting and Legal:</strong> Records relating
              to accounting, litigations, contracts, intellectual property,
              corporate household, and treasury.
            </li>
            <li>
              <strong>Tax:</strong> Everything necessary for your dealings with
              tax and customs authorities, including income tax, VAT, and
              employee wage tax.
            </li>
            <li>
              <strong>Human Resources:</strong> Documents relating to
              recruitment, HR management, payroll, compensation and benefits,
              sickness and leave, and pensions.
            </li>
            <li>
              <strong>Health and Safety:</strong> Governmental inspection
              records, safety data sheets, audits, company doctor records,
              hazardous exposure records, accident and injury reports, and
              insurance records.
            </li>
            <li>
              <strong>Environmental Protection:</strong> Records relating to
              waste and emission management and related permits and licenses.
            </li>
            <li>
              <strong>Finance:</strong> Profit and loss accounts, bid activity,
              cost engineering, accounts payable and accounts receivable.
            </li>
            <li>
              <strong>Transport:</strong> Transport records relating to shipping
              and receiving by air, water, rail, and road.
            </li>
            <li>
              <strong>Sales and Marketing:</strong> Sales and marketing records
              and know-your-customer obligations.
            </li>
          </ul>

          <h2 className="policy-heading text-head text-xl font-bold">
            Automated Deletion
          </h2>
          <p className="policy-text text-para para2">
            Given the context of the use case, it has an automated pipeline
            deleting data on a daily basis. Please keep the log files/history of
            automatic deletion. In addition, please check the status of the
            pipeline regularly to ensure that all data related to this use case
            are deleted automatically.
          </p>

          <h2 className="policy-heading text-head text-xl font-bold">
            Data Anonymization
          </h2>
          <p className="policy-text text-para para2">
            Using data anonymization is recommended. If the personal data is
            anonymized, the data sets can be stored for a longer period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
