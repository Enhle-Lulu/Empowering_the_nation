// Course data
const sixMonthCourses = [
    {
        id: 'first-aid',
        name: 'First Aid',
        duration: '6-month',
        fee: 1500,
        purpose: 'To provide first aid awareness and basic life support',
        content: [
            'Wounds and bleeding',
            'Burns and fractures',
            'Emergency scene management',
            'Cardio-Pulmonary Resuscitation (CPR)',
            'Respiratory distress e.g., Choking, blocked airway'
        ],
        image: 'https://images.unsplash.com/photo-1622115585848-1d5b6e8af4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
        id: 'sewing',
        name: 'Sewing',
        duration: '6-month',
        fee: 1500,
        purpose: 'To provide alterations and new garment tailoring services',
        content: [
            'Types of stitches',
            'Threading a sewing machine',
            'Sewing buttons, zips, hems and seams',
            'Alterations',
            'Designing and sewing new garments'
        ],
        image: 'https://images.unsplash.com/photo-1612353318597-702ae55258cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
        id: 'landscaping',
        name: 'Landscaping',
        duration: '6-month',
        fee: 1500,
        purpose: 'To provide landscaping services for new and established gardens',
        content: [
            'Indigenous and exotic plants and trees',
            'Fixed structures (fountains, statues, benches, tables, built-in braai)',
            'Balancing of plants and trees in a garden',
            'Aesthetics of plant shapes and colours',
            'Garden layout'
        ],
        image: 'https://images.unsplash.com/photo-1713371765638-8cf84d350b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
        id: 'life-skills',
        name: 'Life Skills',
        duration: '6-month',
        fee: 1500,
        purpose: 'To provide skills to navigate basic life necessities',
        content: [
            'Opening a bank account',
            'Basic labour law (know your rights)',
            'Basic reading and writing literacy',
            'Basic numeric literacy'
        ],
        image: 'https://images.unsplash.com/photo-1758522274781-9411e7118b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    }
];

const sixWeekCourses = [
    {
        id: 'child-minding',
        name: 'Child Minding',
        duration: '6-week',
        fee: 750,
        purpose: 'To provide basic child and baby care',
        content: [
            'Birth to six-month old baby needs',
            'Seven-month to one year old needs',
            'Toddler needs',
            'Educational toys'
        ],
        image: 'https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
        id: 'cooking',
        name: 'Cooking',
        duration: '6-week',
        fee: 750,
        purpose: 'To prepare and cook nutritious family meals',
        content: [
            'Nutritional requirements for a healthy body',
            'Types of protein, carbohydrates and vegetables',
            'Planning meals',
            'Tasty and nutritious recipes',
            'Preparation and cooking of meals'
        ],
        image: 'https://images.unsplash.com/photo-1556929361-bb46fb0b4e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
        id: 'garden-maintenance',
        name: 'Garden Maintenance',
        duration: '6-week',
        fee: 750,
        purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
        content: [
            'Water restrictions and the watering requirements of indigenous and exotic plants',
            'Pruning and propagation of plants',
            'Planting techniques for different plant types'
        ],
        image: 'https://images.unsplash.com/photo-1760958932736-2c80ef43d9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    }
];

const allCourses = [...sixMonthCourses, ...sixWeekCourses];

// Venue data
const venues = [
    {
        name: 'Sandton Campus',
        address: '123 Rivonia Road, Sandton, Johannesburg, 2196',
        phone: '011 234 5678',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14328.742733305457!2d28.0473!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSandton%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890'
    },
    {
        name: 'Soweto Campus',
        address: '456 Vilakazi Street, Orlando West, Soweto, 1804',
        phone: '011 345 6789',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14358.742733305457!2d27.8546!3d-26.2309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959c4f5f4c9b67%3A0x2b1f3f5e8f5c5e8c!2sSoweto%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890'
    },
    {
        name: 'Alexandra Campus',
        address: '789 Main Road, Alexandra, Johannesburg, 2090',
        phone: '011 456 7890',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14318.742733305457!2d28.0987!3d-26.1043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957307c8a9e693%3A0x7f5f9e8c9e8c9e8c!2sAlexandra%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890'
    }
];

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Set active nav link
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Calculate discount
function calculateDiscount(courseCount) {
    if (courseCount >= 4) return 15;
    if (courseCount === 3) return 10;
    if (courseCount === 2) return 5;
    return 0;
}

// Calculate quote
function calculateQuote(selectedCourses) {
    const courses = selectedCourses.map(id => allCourses.find(c => c.id === id));
    const subtotal = courses.reduce((sum, course) => sum + course.fee, 0);
    const discount = calculateDiscount(courses.length);
    const discountAmount = subtotal * (discount / 100);
    const afterDiscount = subtotal - discountAmount;
    const vat = afterDiscount * 0.15;
    const total = afterDiscount + vat;
    
    return {
        subtotal,
        discount,
        discountAmount,
        afterDiscount,
        vat,
        total
    };
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
