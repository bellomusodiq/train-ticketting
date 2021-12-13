import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import styles from "./faq.module.css";

const FaqItem = ({ question, answer }) => (
  <div className={styles.FaqItem}>
    <p className={styles.FaqQuestion}>Q) {question}</p>
    <p className={styles.FaqAnswer}>A) {answer}</p>
  </div>
);

const Faq = () => {
  return (
    <PageLayout>
      <div className={styles.Container}>
        <h1>FAQ</h1>
        <FaqItem
          question="I made payment for a ticket, i got debited, but i didn't get a ticket."
          answer="On the Menu tab,Go to profile, click on the tickets, input date of purchase to see tickets history. Select ticket and reprint your ticket. If you can't find your tickets here, you can call our customer service Number or send and email to customercare@tps.ng with the payment receipt details, booking information and reference number."
        />
        <FaqItem
          question="Can i book a return ticket?"
          answer=" No, this feature is currently not available. You are required to book one way trips."
        />
        <FaqItem
          question="Can i buy a ticket for next week?"
          answer="No, you can only buy for same day or next day only."
        />
        <FaqItem
          question="Can i get a refund?"
          answer="Currently, NRC has a NO REFUND policy."
        />
        <FaqItem
          question="I bought my online ticket from IDU to RIGASSA,but i am stuck at KUBWA, can i board from KUBWA?"
          answer="Yes, you can board from the nearest station, if your ticket covers it."
        />
        <FaqItem
          question="I forgot my printed ticket at home, what do i do?"
          answer="If you purchased Your ticket online, you can access your tickets on your web or Mobile profile."
        />
        <FaqItem
          question="I am having some challenges, Can i send you money to book a ticket for me?"
          answer="No, this is strictly against NRC policy."
        />
        <FaqItem
          question="I missed my train, can i join the next train with the same ticket?"
          answer="No, your ticket is valid for only the train you paid for."
        />
        <FaqItem
          question="How long is my ticket valid for?"
          answer="Your ticket is valid until the date of expected travel."
        />
        <FaqItem
          question="My Plans have changed, i am not able to travel, can i get a refund?"
          answer="NRC does not allow refunds."
        />
        <FaqItem
          question="Lost or Stolen ticket"
          answer="This will not be permitted, as ID cards are used to verify with the name on the tickets."
        />
        <FaqItem
          question="In my trip option train is not loading"
          answer="It is possible that there are no trains available at the stations."
        />
      </div>
    </PageLayout>
  );
};

export default Faq;
