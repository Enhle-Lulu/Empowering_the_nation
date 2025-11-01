// Calculator page functionality
document.addEventListener('DOMContentLoaded', () => {
    const sixMonthContainer = document.getElementById('sixMonthCourses');
    const sixWeekContainer = document.getElementById('sixWeekCourses');
    const quoteContent = document.getElementById('quoteContent');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const successMessage = document.getElementById('successMessage');
    
    let selectedCourses = [];

    // Render course checkboxes
    function renderCourses() {
        if (sixMonthContainer) {
            sixMonthContainer.innerHTML = sixMonthCourses.map(course => `
                <div class="checkbox-group">
                    <input type="checkbox" id="${course.id}" value="${course.id}" onchange="updateSelection('${course.id}')">
                    <label for="${course.id}" class="checkbox-label">
                        <span>${course.name}</span>
                        <span style="color: var(--text-gray);">R${course.fee}</span>
                    </label>
                </div>
            `).join('');
        }

        if (sixWeekContainer) {
            sixWeekContainer.innerHTML = sixWeekCourses.map(course => `
                <div class="checkbox-group">
                    <input type="checkbox" id="${course.id}" value="${course.id}" onchange="updateSelection('${course.id}')">
                    <label for="${course.id}" class="checkbox-label">
                        <span>${course.name}</span>
                        <span style="color: var(--text-gray);">R${course.fee}</span>
                    </label>
                </div>
            `).join('');
        }
    }

    // Update course selection
    window.updateSelection = function(courseId) {
        const checkbox = document.getElementById(courseId);
        if (checkbox.checked) {
            if (!selectedCourses.includes(courseId)) {
                selectedCourses.push(courseId);
            }
        } else {
            selectedCourses = selectedCourses.filter(id => id !== courseId);
        }
        updateQuote();
    };

    // Update quote display
    function updateQuote() {
        if (selectedCourses.length === 0) {
            quoteContent.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem; color: var(--text-gray);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🧮</div>
                    <p>Select courses to see your quote</p>
                </div>
            `;
            return;
        }

        const quote = calculateQuote(selectedCourses);
        const courses = selectedCourses.map(id => allCourses.find(c => c.id === id));

        quoteContent.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.875rem; color: var(--text-gray); margin-bottom: 0.75rem;">Selected Courses</div>
                ${courses.map(course => `
                    <div class="selected-course">
                        <span style="color: var(--light-green);">✓</span>
                        <span style="flex: 1;">${course.name}</span>
                        <span>R${course.fee}</span>
                    </div>
                `).join('')}
            </div>

            <div class="quote-section">
                <div class="quote-row">
                    <span style="color: var(--text-gray);">Subtotal</span>
                    <span>R${quote.subtotal.toFixed(2)}</span>
                </div>

                ${quote.discount > 0 ? `
                    <div class="quote-row" style="color: var(--light-green);">
                        <span>Discount (${quote.discount}%)</span>
                        <span>-R${quote.discountAmount.toFixed(2)}</span>
                    </div>
                ` : ''}

                <div class="quote-row">
                    <span style="color: var(--text-gray);">After Discount</span>
                    <span>R${quote.afterDiscount.toFixed(2)}</span>
                </div>

                <div class="quote-row">
                    <span style="color: var(--text-gray);">VAT (15%)</span>
                    <span>R${quote.vat.toFixed(2)}</span>
                </div>

                <div class="quote-row quote-total">
                    <span>Total Amount</span>
                    <span>R${quote.total.toFixed(2)}</span>
                </div>
            </div>
        `;
    }

    // Validate form
    function validateForm() {
        let isValid = true;
        
        // Clear previous errors
        document.getElementById('nameError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('coursesError').textContent = '';

        // Validate name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        // Validate phone
        const phone = document.getElementById('phone').value.trim();
        if (!phone) {
            document.getElementById('phoneError').textContent = 'Phone number is required';
            isValid = false;
        } else if (!validatePhone(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate courses
        if (selectedCourses.length === 0) {
            document.getElementById('coursesError').textContent = 'Please select at least one course';
            isValid = false;
        }

        return isValid;
    }

    // Calculate button click
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            if (!validateForm()) {
                return;
            }

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const quote = calculateQuote(selectedCourses);

            successMessage.innerHTML = `
                <div style="color: var(--dark-green); margin-bottom: 0.5rem;">✓ Quote Generated!</div>
                <p style="font-size: 0.875rem; color: var(--text-gray); margin: 0;">
                    Thank you, ${name}! We'll contact you at ${phone} or ${email} to complete your enrollment.
                </p>
            `;
            successMessage.style.display = 'block';

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Log to console 
            console.log('Quote Generated:', {
                name,
                phone,
                email,
                selectedCourses,
                quote
            });
        });
    }

    // Reset button click
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.getElementById('calculatorForm').reset();
            selectedCourses = [];
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            updateQuote();
            successMessage.style.display = 'none';
            
            // Clear errors
            document.getElementById('nameError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('coursesError').textContent = '';
        });
    }

    // Initialize
    renderCourses();
});
