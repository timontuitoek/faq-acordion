document.addEventListener("DOMContentLoaded", function () {
    const faqContainer = document.getElementById("faqContainer");

    // FAQ data
    const faqData = [
        { question: "What is FAQ?", answer: "FAQ stands for Frequently Asked Questions." },
        { question: "Why do we use FAQs?", answer: "FAQs help users find answers to common questions without contacting support." },
        // Add more FAQ items as needed
    ];

    // Generate FAQ items
    faqData.forEach((item, index) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");

        const question = document.createElement("div");
        question.classList.add("faq-question");
        question.textContent = `${index + 1}. ${item.question}`;

        const answer = document.createElement("div");
        answer.classList.add("faq-answer");
        answer.textContent = item.answer;

        // Toggle answer visibility on click
        question.addEventListener("click", function () {
            faqItem.classList.toggle("active");
        });

        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        faqContainer.appendChild(faqItem);
    });
});
