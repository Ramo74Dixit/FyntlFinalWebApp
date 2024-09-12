import React, {useEffect} from "react";
import TermsBACK from "../assets/TermsBACK.png";

const TermsandCondition = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className="flex relative">
         <img src={TermsBACK} alt="BackgroundImage" className="hidden sm:flex absolute top-0 left-0 z-0 w-[30vh] h-[115vh] "></img>
         <div className="my-auto absolute top-32 left-48">
            <div class="hidden sm:flex items-center justify-center w-14 h-14 shadow-xl border bg-white text-[#6323E4] rounded-full z-10 mt-14 ">1</div>
            <div class="hidden sm:flex items-center justify-center w-14 h-14 shadow-xl border bg-white text-[#6323E4] rounded-full z-10 mt-14 ">2</div>
            <div class="hidden sm:flex items-center justify-center w-14 h-14 shadow-xl border bg-white text-[#6323E4] rounded-full z-10 mt-14 ">3</div>
            <div class="hidden sm:flex items-center justify-center w-14 h-14 shadow-xl border bg-white text-[#6323E4] rounded-full z-10 mt-14 ">4</div>
            <div class="hidden sm:flex items-center justify-center w-14 h-14 shadow-xl border bg-white text-[#6323E4] rounded-full z-10 mt-14 ">5</div>
         </div>
         <div className=" absolute sm:left-56">
            <h1 className="sm:ml-28 sm:mt-20 text-2xl sm:text-5xl text-center sm:text-left font-serif font-semibold text-black">Terms & Condtions</h1>
            <div className="h-[68vh] w-[42vh] sm:w-auto custom-scrollbar text-left overflow-y-scroll mt-8 sm:mt-16 ml-5 sm:ml-28 sm:mr-48">
               <p>Fyntl-AI is a product of Sangrah Innovations Private Limited Limited.</p>
               <p className="mt-[2vh] mr-[6vh] ">
                  <span className="font-bold ">Sangrah Innovations Private Limited Limited</span> (“Fyntl-AI”, “fyntl”, “Sangrah Innovations Private Limited”,
                  “we”, “us”, or “our”) provides Software as a Service (SaaS) that allows our customers to store, manipulate, analyze and transfer messages
                  between their business systems and their customers on a variety of Sangrah Innovations Private Limited provided and third party messaging
                  channels (the “Service”). A “Customer” is an entity with whom Sangrah Innovations Private Limited has an agreement to provide the Service.
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  This Sangrah Innovations Private Limited Terms of Service (the “Agreement”) is an agreement between the Customer and Sangrah Innovations
                  Private Limited, together the “Parties” and each, a “Party”, and is entered on the date the Customer signs up for a Sangrah Innovations
                  Private Limited account through the Sangrah Innovations Private Limited website (the “Effective Date”).
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  If you register for a Sangrah Innovations Private Limited or fyntl account, you acknowledge your understanding of these terms and enter the
                  Agreement on behalf of the Customer. Please make sure you have the necessary authority to enter into the Agreement on behalf of the Customer
                  before proceeding.
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  If a Customer violates any of the terms outlined below, we reserve the right to cancel accounts or bar access to accounts without notice. If
                  you do not agree to these terms, please do not use our Services.
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  Sangrah Innovations Private Limited may, but have no obligation to, remove Content and Accounts containing Content that we determine in our
                  sole discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or otherwise objectionable or violates any
                  party’s intellectual property or these Terms of Use.
               </p>
               <p className="mt-[2vh] mr-[6vh] ">Sangrah Innovations Private Limited may refuse service to anyone for any reason at any time.</p>
               <p className="mt-[2vh] mr-[6vh] ">
                  BY USING ANY ELEMENT OF THE Sangrah Innovations Private Limited SOLUTION (INCLUDING THE WEBSITE), CUSTOMER ACKNOWLEDGES THAT CUSTOMER HAS
                  READ, ACCEPTS AND AGREES TO BE BOUND BY AND COMPLY WITH THE TERMS AND CONDITIONS, SET OUT IN THIS AGREEMENT, AS AMENDED FROM TIME TO TIME. IF
                  CUSTOMER DOES NOT ACCEPT AND AGREE TO BE BOUND BY THIS AGREEMENT, CUSTOMER WILL IMMEDIATELY CEASE ANY FURTHER USE OF THE Sangrah Innovations
                  Private Limited SOLUTION, INCLUDING USE OF ANY PART THEREOF. CUSTOMER REPRESENTS AND WARRANTS TO Sangrah Innovations Private Limited THAT
                  CUSTOMER HAS THE CAPACITY TO ENTER INTO THIS LEGALLY BINDING AGREEMENT. IF CUSTOMER IS USING THE Sangrah Innovations Private Limited SOLUTION
                  ON BEHALF OF ANOTHER PERSON, CUSTOMER HEREBY REPRESENTS AND WARRANTS TO Sangrah Innovations Private Limited THAT CUSTOMER HAS THE AUTHORITY TO
                  BIND SUCH PERSON TO THIS AGREEMENT.
               </p>
               <ul class="list-decimal pl-10 mt-[2vh]">
                  <li>
                     <h3 className="font-bold">Fyntl Platform</h3>
                     <p>
                        Provisioning of the Sangrah Innovations Private Limited Platform. Subject to Customer’s compliance with the terms and conditions of this
                        Agreement, Sangrah Innovations Private Limited will make the Sangrah Innovations Private Limited Platform available to Customer on the
                        terms and conditions set out in this Agreement, provided that: (i) Customer has read and accepted and is in compliance with its
                        obligations under the applicable terms of use related to all applicable Third Party Messaging Platforms, Pre-Integrated Third-Party
                        Business Applications, and Custom-Integrated Business Applications; and (ii) has taken all steps as necessary to enable interoperability
                        between the Sangrah Innovations Private Limited Platform and all applicable Third Party Messaging Platforms, Pre-Integrated Third-Party
                        Business Applications, and Custom-Integrated Business Applications, including acquiring the necessary approvals and API keys, whether
                        directly or via Customer’s Clients, to access these messaging channels as a business.
                     </p>
                  </li>
                  <li>
                     <h3 className="font-bold">Modifications to the Service and Fees</h3>
                     <p>
                        Sangrah Innovations Private Limited reserves the right to modify, suspend, or discontinue the Service at any time for any reason, with
                        or without notice.
                     </p>
                  </li>
               </ul>
               <p className="mt-[2vh] mr-[6vh] ">
                  Sangrah Innovations Private Limited reserves the right to change our monthly/annual fees upon 30 days’ notice. The fee change will be notified
                  per email to all our subscribers and will be reflected on the pricing section at website.
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  Sangrah Innovations Private Limited reserves the right to update and change the Terms of Service from time to time without notice. Any new
                  features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of
                  Service. Should you continue to use the Service after any such modifications have been made, this shall constitute your agreement to such
                  modifications.
               </p>
               <ol class="list-decimal pl-10 mt-[2vh] " start="3">
                  <li>
                     <h3 className="font-bold">Trademark License</h3>
                     <p>
                        During the Term, Customer hereby grants to Sangrah Innovations Private Limited a worldwide, non-exclusive, non-transferable and
                        non-sub-licensable (other than to affiliates) royalty-free licence to use Customer’s trademarks and logos made available to Sangrah
                        Innovations Private Limited by Customer as part of this Agreement, solely in connection with the marketing, advertising, and promotion
                        of the Sangrah Innovations Private Limited Solution, including listing the Customer and the Customer Application on the Sangrah
                        Innovations Private Limited Website; and only in accordance with Customer’s reasonable trademark usage guidelines, as updated by
                        Customer from time to time. Customer may require Sangrah Innovations Private Limited to cease using Customer’s trademarks and logos if,
                        in the reasonable opinion of Customer, the continued display of Customer’s trademarks and logos would cause a materially adverse effect
                        on Customer’s image and the goodwill associated therewith.
                     </p>
                  </li>
                  <li>
                     <h3 className="font-bold">Copyrights & Ownerships</h3>
                     <p>
                        Sangrah Innovations Private Limited expressly reserves all rights, title, and interest in, and Customer will not acquire any right,
                        title or interest in (i) the Sangrah Innovations Private Limited Solution (or any part thereof) and any other materials or content
                        provided by Sangrah Innovations Private Limited under this Agreement, including any and all Modifications to any of the foregoing; and
                        (ii) all intellectual property rights in any of the foregoing (clauses (i) and (ii) are collective, the “Sangrah Innovations Private
                        Limited Property”), in each case. All right, titles and interests in the Sangrah Innovations Private Limited Property will remain with
                        Sangrah Innovations Private Limited (or Sangrah Innovations Private Limited’s third-party suppliers, as applicable). Customer may not
                        copy, modify, adapt, reproduce, distribute, reverse engineer, decompile, or disassemble any aspect of the Service which Sangrah
                        Innovations Private Limited or its suppliers own. The customer agrees not to resell, duplicate, reproduce or exploit any part of the
                        Service without the express written permission of Sangrah Innovations Private Limited. For greater certainty, the Sangrah Innovations
                        Private Limited Property is licensed and not “sold” to the Customer.
                     </p>
                  </li>
               </ol>
               <p className="mt-[2vh] mr-[6vh]">
                  Sangrah Innovations Private Limited claims no intellectual property rights over the Content you upload or provide to the Service.
               </p>
               <p className="mt-[2vh] mr-[6vh]">Sangrah Innovations Private Limited’s Right to Use Customer Data</p>
               <p className="mt-[2vh] mr-[6vh]">
                  Customer acknowledges and agrees that Sangrah Innovations Private Limited may store, use, reproduce, Modify, and transfer to its
                  subcontractors, Customer Data, including Personal Data, solely in connection with delivering the Services under this Agreement. Customer
                  further acknowledges and agrees that Sangrah Innovations Private Limited may store, use, reproduce, Modify, and transfer data that is not
                  related to an identified or identifiable natural person, including aggregated or de-identified data, without limitation, for its internal
                  business purposes, including but not limited to such purposes as analytics, quality assurance, product and service improvement, and new
                  product and service development. The customer agrees to cause any Administrative User, Customer’s Client and Chat Participant to agree to the
                  terms.
               </p>
               <ol class="list-decimal pl-10 mt-[2vh] " start="5">
                  <li>
                     <h3 className="font-bold">Customers Responsibility</h3>
                     <p>
                        <span className="font-bold">Customer Accounts.</span>
                        Upon Customer’s request, Sangrah Innovations Private Limited will issue one or more administrator accounts (the “Administrator
                        Accounts”) to Customer that provides Customer with the capability to create accounts for use by individuals who are an employee or
                        contractor of Customer and that Customer wishes to have access to and use of the Sangrah Innovations Private Limited Platform (each, an
                        “Administrative User”). Customer will ensure that Administrative Users only use the Sangrah Innovations Private Limited Platform through
                        their Customer Account. Customer will not share their Administrator Accounts with any other person and will not allow Administrative
                        Users to share their Customer Account with any other person. The customer will promptly notify Sangrah Innovations Private Limited of
                        any actual or suspected unauthorized use of the Sangrah Innovations Private Limited Platform. Sangrah Innovations Private Limited
                        reserves the right to suspend, deactivate, or replace any Customer Account or Administrator Accounts if it determines that the Customer
                        Account or Administrator Account, as applicable, may have been used for an unauthorized purpose.
                     </p>
                  </li>
               </ol>
               <p className="mt-[2vh] mr-[6vh]">
                  Customers are responsible for maintaining the privacy and security of their accounts. Sangrah Innovations Private Limited will not be held
                  liable for any damage or loss that may result from your failure to protect your login information, including your password.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Use Restrictions.</span> Customer acknowledges and agrees that it is responsible for the activities and
                  communications of all Administrative Users and Chat Participants on the Sangrah Innovations Private Limited Platform, and the compliance by
                  all Administrative Users, Customer’s Clients and Chat Participants with this Agreement, and any guidelines and policies published by Sangrah
                  Innovations Private Limited from time to time.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  The Customer is fully responsible for all activities that occur under the account and any other actions taken in connection with the account.
                  You are responsible for all Content sent and activity that occurs under your account (even when Content is sent by others to your account).
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  Sangrah Innovations Private Limited may, but have no obligation to, remove Content and Accounts containing Content that we determine in our
                  sole discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or otherwise objectionable or violates any
                  party’s intellectual property or these Terms of Use.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  Without limiting the generality of any of the foregoing, Customer will not, and will not permit any other person (including any Administrative
                  Users, Customer’s Clients or Chat Participants) to:
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  – use the Sangrah Innovations Private Limited Platform to send, upload, collect, transmit, store, use, disclose or process, or ask Sangrah
                  Innovations Private Limited to obtain from third parties or perform any of the above with respect to, any Customer Data:
               </p>
               <p className="mr-[6vh]">
                  that contains any computer viruses, worms, malicious code, or any software intended to damage or alter a computer system or data;
               </p>
               <p className="mr-[6vh]">
                  that Customer or the applicable Administrative User, Customer’s Client or Chat Participant does not have the lawful right to send, upload,
                  collect, transmit, store, use, disclose, process, copy, transmit, distribute and display;
               </p>
               <p className="mr-[6vh]">that is false, intentionally misleading, or impersonates any other person;</p>
               <p className="mr-[6vh]">
                  that is bullying, harassing, abusive, threatening, vulgar, obscene, or offensive, or that contains pornography, nudity, or graphic or
                  gratuitous violence, or that promotes violence, racism, discrimination, bigotry, hatred, or physical harm of any kind against any group or
                  individual;
               </p>
               <p className="mr-[6vh]">that is harmful to minors in any way or targeted at persons under the age of 16;</p>
               <p className="mr-[6vh]">
                  that violates any applicable laws, or infringes, violates or otherwise misappropriates the intellectual property or other rights of any third
                  party (including any moral right, privacy right or right of publicity); or
               </p>
               <p className="mr-[6vh]">that encourages any conduct that may violate, any applicable laws or would give rise to civil or criminal liability;</p>
               <p className="mr-[6vh]">
                  – disable, overly burden, impair, or otherwise interfere with servers or networks connected to the Sangrah Innovations Private Limited
                  Platform (e.g., a denial of service attack);
               </p>
               <p className="mr-[6vh]">– attempt to gain unauthorized access to the Sangrah Innovations Private Limited Platform;</p>
               <p className="mr-[6vh]">
                  – use any data mining, robots, or similar data gathering or extraction methods, or copy, Modify, reverse engineer, reverse assemble,
                  disassemble, or decompile the Sangrah Innovations Private Limited Solution or any part thereof or otherwise attempt to discover any source
                  code, except as expressly provided for in this Agreement;
               </p>
               <p className="mr-[6vh]">
                  – use the Sangrah Innovations Private Limited Solution for the purpose of building a similar or competitive product or service; or
               </p>
               <p className="mr-[6vh]">– use the Sangrah Innovations Private Limited Solution other than as permitted by this Agreement;</p>

               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">WhatsApp & Usage Policy</span>
               </p>
               <p className="mr-[6vh] ">
                  - The Customer shall adhere to all the terms & conditions set by WhatsApp at all times. WhatsApp may update WhatsApp Business Policy without
                  notice; by continuing to use the WhatsApp Business Products after such change, the Customer consents to such changes.{" "}
                  <a href="https://www.whatsapp.com/legal/business-policy/">https://www.whatsapp.com/legal/business-policy/</a>
               </p>
               <p className="mr-[6vh] ">
                  - The Customer is not in violation of the WhatsApp Commerce Policy and is not in any of the restricted industries.{" "}
                  <a href="https://www.whatsapp.com/legal/commerce-policy/">https://www.whatsapp.com/legal/commerce-policy/</a>
               </p>
               <p className="mr-[6vh] ">
                  - WhatsApp may add limits to businesses on the number of messages to send per day. All Customers must adhere to this Messaging Limit{" "}
                  <a href="https://developers.facebook.com/docs/whatsapp/api/rate-limits">https://developers.facebook.com/docs/whatsapp/api/rate-limits</a>
               </p>
               <p className="mr-[6vh] ">
                  - WhatsApp has the absolute discretion to review, approve or reject any Message Templates (as defined in WhatsApp documentations) at any time.
               </p>
               <p className="mr-[6vh] ">- Customer agrees to ensure full compliance with WhatsApp Policies regarding sending of messages</p>
               <p className="mr-[6vh] ">
                  - WhatsApp does not offer a way to be notified when a user has blocked your sender, or to retrieve a list of users who have blocked you.
               </p>
               <p className="mr-[6vh] ">
                  - Any violation of these WhatsApp policies may lead to suspension of the number by WhatsApp. WhatsApp has absolute discretion to limit or
                  remove Customer’s access to or use of the WhatsApp Business Products if Customer receives excessive negative feedback, causes harm to WhatsApp
                  or WhatsApp’s users, or violates or encourages others to violate our terms or policies, as determined by WhatsApp in our sole discretion. If
                  WhatsApp terminates your account for violations of relevant WhatsApp Business terms or policies, WhatsApp may prohibit Customer and Customer
                  organization from all future use of WhatsApp products.
               </p>
               <p className="mr-[6vh] ">
                  - Sangrah Innovations Private Limited shall take no responsibility in case of any such violations. Any additional charges arising due to this
                  shall be borne by the Customer.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">WhatsApp Message Policy</span>
               </p>
               <p className="mr-[6vh] ">- WhatsApp may change acceptable message types and related policies at their absolute discretion at all times.</p>
               <p className="mr-[6vh] ">
                  - The Customer may only initiate chats if you are sending a transactional notification, and only via approved Message Templates (as defined in
                  WhatsApp documentation), subject to applicable pricing. Any Message Templates must comply with WhatsApp’s terms, and only be used for their
                  designated purpose. WhatsApp has the right to review, approve and reject any Message Template at any time. — Customer acknowledges that they
                  are responsible for the variable Message Template costs, billed by Sangrah Innovations Private Limited.
               </p>
               <p className="mr-[6vh] ">
                  - If a person initiates a chat with a Customer, you may continue that conversation via WhatsApp for up to 24 hours after the last message sent
                  to you by that person without charge (“Customer Service Window”). Outside of the Customer Service Window, Customer may only send messages via
                  approved Message Templates, for which Sangrah Innovations Private Limited will bill and charge Customer the applicable rate.
               </p>
               <p className="mr-[6vh] ">
                  - Customer may use automation when responding during the Customer Service Window, but must also have available prompt, clear, and direct
                  escalation paths to human agents.
               </p>
               <ol class="list-decimal pl-10 mt-[2vh] " start="6">
                  <li>
                     <h3 className="font-bold">Email and Web Support</h3>
                     <p className="mr-[6vh]">
                        Customer will generally have access to Sangrah Innovations Private Limited’s technical support from 10:00 am to 7:00 pm IST (GMT+5:30)
                        on weekdays (other than holidays observed by Sangrah Innovations Private Limited) through email support, or through the web site using
                        our chat widget, or by mailing us on info@sangrahinnovations.com
                     </p>
                  </li>
                  <li>
                     <h3 className="font-bold">Fees and Payment</h3>
                     <p className="mr-[6vh]">
                        The customer will pay Sangrah Innovations Private Limited the applicable fees described on the Sangrah Innovations Website (the “Fees”)
                        during the Term in accordance with the payment terms set out herein.
                     </p>
                  </li>
               </ol>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Third-Party Messaging Platform Fees.</span>
               </p>
               <p className="mr-[6vh]">
                  For greater clarity, Fyntl’s Fees do not include any charges that may be assessed by Third Party Messaging Platforms for access to or use of a
                  channel. Such charges shall be the responsibility of Customer, whether paid directly to the Third Party Messaging Platforms or whether such
                  access is resold through Sangrah Innovations Private Limited, in which case Sangrah Innovations Private Limited shall advise Customer in
                  writing as to the applicable charges and Customer shall have the right to accept such charges or decline them and not use the associated
                  channel. In the event a Third Party Messaging Platforms imposes special requirements on Sangrah Innovations Private Limited beyond API
                  integrations, including but not limited to hosting endpoints unique to that channel, then Sangrah Innovations Private Limited shall have the
                  right to charge Customer for this additional service, and Customer shall have the right to accept such charges or decline them and not use the
                  associated channel.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Payment Terms:</span>
               </p>
               <p className="mr-[6vh]">- All Fees shall be in Indian Rupee.</p>
               <ol className="mt-[2vh] pl-10 list-decimal " start="8">
                  <li>
                     <h3 className="font-bold">Limitation of Liabilities</h3>
                     <p className="mr-[6vh]">
                        The Parties acknowledge that the following provisions have been negotiated by them and reflect a fair allocation of risk and form an
                        essential basis of the bargain and will survive and continue in full force and effect despite any failure of consideration or of an
                        exclusive remedy:
                     </p>
                  </li>
               </ol>
               <p className=" mr-[6vh] mt-[2vh]">
                  TYPE. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL Sangrah Innovations Private Limited BE LIABLE TO CUSTOMER OR ANY
                  USER FOR ANY: (I) SPECIAL, EXEMPLARY, PUNITIVE, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, (II) LOST SAVINGS, PROFIT, DATA, USE, OR
                  GOODWILL; (III) BUSINESS INTERRUPTION; (IV) ANY COSTS FOR THE PROCUREMENT OF SUBSTITUTE PRODUCTS OR SERVICES; (V) PERSONAL INJURY OR DEATH; OR
                  (VI) PERSONAL OR PROPERTY DAMAGE ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT, REGARDLESS OF CAUSE OF ACTION OR THE THEORY OF
                  LIABILITY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE, GROSS NEGLIGENCE, FUNDAMENTAL BREACH, BREACH OF A FUNDAMENTAL TERM) OR OTHERWISE
                  AND EVEN IF NOTIFIED IN ADVANCE OF THE POSSIBILITIES OF SUCH DAMAGES.
               </p>
               <ol className="mt-[2vh] pl-10  list-decimal " start="9">
                  <li>
                     <h3 className="font-bold">Terms and Termination</h3>
                     <p className="mr-[6vh]">
                        Sangrah Innovations Private Limited makes no warranties regarding (i) your ability to use the Service, (ii) your satisfaction with the
                        Service, (iii) that the Service will be available at all times, uninterrupted, and error-free (iv), the accuracy of mathematical
                        calculations performed by the Service, and (v) that bugs or errors in the Service will be corrected. Sangrah Innovations Private Limited
                        and its affiliates are neither responsible nor liable for any direct, indirect, incidental, consequential, special, exemplary, punitive
                        or other damages arising out of or relating in any way to your use of the Service. Your sole remedy for dissatisfaction with the Service
                        is to stop using the Service.
                     </p>
                  </li>
               </ol>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Term.</span> This Agreement will commence on the Effective Date and continue to be in effect until your
                  subscription has been terminated in accordance with the terms Customer agreed to on the Sangrah Innovations Private Limited website at the
                  time of signup (the “Term”). For greater certainty, if the Customer has subscribed to an ongoing subscription, then the such subscription will
                  automatically renew at its expiry for the same period of time, at the then-current subscription rate described on the Sangrah Innovations
                  Private Limited Website.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Termination For Convenience.</span>
               </p>
               <p className=" mr-[6vh]">
                  Either Party may elect to terminate this Agreement and your subscription to Sangrah Innovations Private Limited services as of the end of your
                  then-current Term by providing notice, on or prior to the date thirty (30) days preceding the end of such Term. For clarity, unless this
                  Agreement and your subscription are so terminated, your subscription will renew for a Term equivalent in length to the then-expiring Term.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  The customer is responsible for properly cancelling your Account. An email request to cancel your Account shall result in cancellation. Any
                  cancellation of your Account will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture
                  and relinquishment of all Content in your Account. This information cannot be recovered from Sangrah Innovations Private Limited once your
                  account is cancelled. After terminating a customer account, there will be a 90-day grace period where the customer can reactivate the account.
                  After 90 days, the account deletion process will begin, and the customer will have to purchase a new account and cannot retrieve any of their
                  existing fyntl account information. Please be aware of that. You can cancel at any time, but you will remain liable for all charges accrued up
                  to that time, including full monthly charges for the month in which you discontinued service. You will not be charged again.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  Sangrah Innovations Private Limited will use all reasonable efforts to contact you directly via email to warn you prior to the suspension or
                  termination of your account. Any suspected fraudulent, abusive, or illegal activity that may be grounds for termination of your use of Service
                  may be referred to appropriate law enforcement authorities. Sangrah Innovations Private Limited shall not be liable to You or any third party
                  for any modification, suspension or discontinuation of the Service.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Termination For Non-payment.</span>
               </p>
               <p className="mt-[2vh] mr-[6vh] ">
                  Sangrah Innovations Private Limited reserves the right to suspend Services if the Customer fails to timely pay any undisputed amounts due to
                  Sangrah Innovations Private Limited under this Agreement, but only after Sangrah Innovations Private Limited notifies Customer of such failure
                  and such failure continues for thirty (30) calendar days after such notification. Suspension of Services shall not release Customer of its
                  payment obligations under this Agreement. Customer agrees that Sangrah Innovations Private Limited shall not be liable to Customer or to any
                  third party for any liabilities, claims or expenses arising from or relating to suspension of the Services resulting from Customer’s
                  non-payment unless Sangrah Innovations Private Limited suspends the Services without giving Customer 30 calendar days written notice to
                  rectify its failure to pay.
               </p>
               <p className=" mr-[6vh]">
                  Termination will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment
                  of all Content in your Account. This information cannot be recovered from Sangrah Innovations Private Limited once your account is terminated.
                  Please be aware of that.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Refunds and Termination Charges.</span> No refunds or credits for Fees will be provided if you elect to terminate
                  this Agreement prior to the end of your Term. If you terminate this Agreement prior to the end of your Term, or Sangrah Innovations Private
                  Limited effects such termination, in addition to other amounts you may owe Sangrah Innovations Private Limited, you must immediately pay any
                  then unpaid Fees associated with the remainder of your Term. This amount will not be payable by you in the event you terminate as a result of
                  a material breach of this Agreement by Sangrah Innovations Private Limited, provided that you provide advance notice of a such breach to
                  Sangrah Innovations Private Limited and afford Sangrah Innovations Private Limited not less than thirty (30) days to reasonably cure such
                  breach.
               </p>
               <p className="mt-[2vh] mr-[6vh]">
                  <span className="font-bold">Termination for Cause.</span> A Party may terminate this Agreement for cause (a) upon thirty (30) days written
                  notice to the other Party of a material breach if such breach remains uncured at the expiration of such period; or (b) if the other Party
                  becomes the subject of a petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation or assignment for
                  the benefit of creditors. If this Agreement is terminated by you in accordance with this section, Sangrah Innovations Private Limited will, to
                  the extent permitted by applicable law, refund you any prepaid fees covering the remainder of the Term after the effective date of
                  termination. If this Agreement is terminated by Sangrah Innovations Private Limited in accordance with this section, you will pay any unpaid
                  fees covering the remainder of the Term. In no event will termination relieve you of your obligation to pay any fees payable to Sangrah
                  Innovations Private Limited for the period prior to the effective date of termination.
               </p>
            </div>

            <div className="flex mb-10 sm:mb-0">
               <button className="mx-auto border-2 w-[10vh] sm:w-[20vh] h-[4vh] sm:h-[7vh] text-lg mt-20 text-[#1C579C] border-[#1C579C] ">Decline</button>
               <button className="mx-auto border-2 w-[10vh] sm:w-[20vh] h-[4vh] sm:h-[7vh] text-lg mt-20 text-white bg-[#1C579C]">Accept</button>
            </div>
            <style>
               {`
          .custom-scrollbar {
    overflow: auto; /* Ensure the scrollbar appears */
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #1C579C transparent; /* For Firefox */
}
        `}
            </style>
         </div>
      </div>
   );
};

export default TermsandCondition;
