const courses = [
    {
        title: "SQL Codechum Certificate",
        subtitle: "Certification",
        description: "Awarded for successfully completing the IT102 SQL course on CodeChum, demonstrating proficiency in database management, querying, and data manipulation with a perfect score of 104/100.",
        image: "images/sql.png"
    },
    {
        title: "Software Concept Design and Planning: ByaheBuddy",
        subtitle: "Assignment",
        description: "ByaheBuddy is a commute assistance app concept designed to help users navigate public transportation efficiently. It features a route planner, user dashboard, and commuter hotspot listings, providing real-time travel insights tailored for urban commuters.",
        gallery: [
            {
                image: "images/byahe1.png"
            },
            {
                image: "images/byahe2.png"
            },
            {
                image: "images/byahe3.png"
            },
            {
                image: "images/byahe4.png"
            }
        ]
    },
    {
        title: "Leading with Innovation in the Age of AI",
        subtitle: "Certification",
        image: "images/ai.png"
    },
    {
        title: "Java 8 Essential Training",
        subtitle: "Certification",
        image: "images/java8.png"
    },
    {
        title: "Bo's Market Point of Sale System",
        subtitle: "Assignment/Project",
        description: "This Point of Sale (POS) system is designed to help local farmers streamline transactions, making order processing, inventory tracking, and sales reporting faster and more efficient. By automating the checkout process, the system reduces manual work, minimizes errors, and enhances the overall customer and vendor experience. This project aims to empower small-scale farmers by providing them with a user-friendly and reliable digital tool for managing their market sales seamlessly.",
        gallery: [
            {
                image: "images/pos.png",
                description: "Point of Sale Interface"
            },
            {
                image: "images/totalcost.png",
                description: "Total Cost Calculation"
            },
            {
                image: "images/receipt.png",
                description: "Receipt Generation"
            },
            {
                image: "images/empty.png",
                description: "Empty Cart View"
            }
        ]
    },
    {
        title: "Bo's Enhanced Reservation Systems",
        subtitle: "Assignment/Project",
        description: "This hotel reservation system streamlines the booking process with an intuitive interface for managing room reservations. It features real-time availability updates, automated confirmation messages, and a user-friendly booking management system. The project demonstrates my ability to create efficient database-driven applications that enhance both customer experience and administrative operations.",
        gallery: [
            {
                image: "images/hotel1.png",
                description: "Reservation Interface"
            },
            {
                image: "images/hotel2.png",
                description: "Booking View"
            },
            {
                image: "images/hotel3.png",
                description: "Confirmation Screen"
            },
            {
                image: "images/hotel4.png",
                description: "Receipt View"
            }
        ]
    }
];


function createCourseCards() {
    const courseContainer = document.querySelector('.course-container');
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        if (course.image) {
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p class="subtitle">${course.subtitle}</p>
                <img src="${course.image}" alt="${course.title}" class="certificate-image">
                ${course.description ? `<p class="certificate-description">${course.description}</p>` : ''}
            `;
        } else if (course.gallery) {
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p class="subtitle">${course.subtitle}</p>
                <div class="gallery-grid">
                    ${course.gallery.map(item => `
                        <div class="gallery-item">
                            <img src="${item.image}" alt="ByaheBuddy Interface">
                        </div>
                    `).join('')}
                </div>
                <p class="certificate-description">${course.description}</p>
            `;
        } else {
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${course.progress}%"></div>
                </div>
                <p class="completion">Completion: ${course.progress}%</p>
                <p class="date">${course.date}</p>
            `;
        }
        
        courseContainer.appendChild(courseCard);
    });
}

/
document.addEventListener('DOMContentLoaded', createCourseCards); 