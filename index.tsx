<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The AGT: Live On Earth Forever</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
        import { createIcons, CircleUser, Zap, TrendingUp, Handshake, Mail, Bitcoin } from 'https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js';
        document.addEventListener('DOMContentLoaded', () => {
            createIcons({ icons: { CircleUser, Zap, TrendingUp, Handshake, Mail, Bitcoin } });
        });
    </script>
    <style>
        /* Custom CSS for futuristic, high-contrast theme */
        :root {
            /* SHINING BLUE ACCENT COLOR (Highly contrasting for dark cards) */
            --primary-color: #00FFFF; 
            /* Light/Shining Blue Background (as requested) */
            --background-color: #188ade; 
            /* Dark Blue for high-contrast elements (Header, Footer, Cards) */
            --dark-blue: #0f172a;
        }
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #188ade 0%, #1f2937 100%); /* Light to Dark Blue Gradient */
            background-attachment: fixed;
            /* Dark text for better contrast against the bright blue background */
            color: #1f2937; 
        }
        .text-agt { color: var(--primary-color); }
        .bg-agt { background-color: var(--primary-color); }
        .btn-agt {
            background-color: var(--primary-color);
            color: var(--dark-blue); /* Dark text on bright button */
            font-weight: bold;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        .btn-agt:hover {
            transform: translateY(-2px);
            /* Updated shadow color to match new primary color */
            box-shadow: 0 4px 15px rgba(0, 255, 255, 0.6);
        }
        .card {
            /* Dark Blue/Slate for excellent contrast on the blue gradient background */
            background-color: var(--dark-blue); 
            color: #e5e7eb; /* Light text for dark cards */
            /* Updated border color to new primary color */
            border: 1px solid rgba(0, 255, 255, 0.4);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .section-heading {
            border-bottom: 2px solid var(--primary-color);
            display: inline-block;
            padding-bottom: 0.25rem;
        }
        /* Ensure header/footer have a dark background for readability */
        header, footer {
             background-color: var(--dark-blue); 
             color: #e5e7eb;
        }
        /* Starburst Celebration Animation - Updated color */
        .starburst-anim {
            animation: spin 20s linear infinite;
        }
        .starburst-anim g {
            stroke: var(--primary-color);
        }
        .starburst-anim circle {
            fill: rgba(0, 255, 255, 0.1);
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <div class="min-h-screen flex flex-col">

        <header class="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-agt">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <h1 class="text-2xl font-extrabold tracking-tight text-white">
                    AGT:<span class="text-agt">Forever</span>
                </h1>
                <nav class="flex space-x-4">
                    <a href="#" onclick="showPage('home')" class="text-gray-300 hover:text-agt transition duration-150 font-medium">Home</a>
                    <a href="#" onclick="showPage('benefits')" class="text-gray-300 hover:text-agt transition duration-150 font-medium hidden sm:block">Benefits</a>
                    <a href="#" onclick="showPage('claim')" class="text-agt transition duration-150 font-medium">Claim</a>
                </nav>
            </div>
        </header>

        <main class="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">

            <section id="home" class="page-section space-y-8">
                <div class="text-center py-16 card rounded-xl relative overflow-hidden">
                    
                    <svg class="absolute inset-0 w-full h-full opacity-30 transform rotate-45 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <g class="starburst-anim" fill="none" stroke="var(--primary-color)" stroke-width="0.5">
                            <line x1="50" y1="0" x2="50" y2="100" />
                            <line x1="0" y1="50" x2="100" y2="50" />
                            <line x1="15" y1="15" x2="85" y2="85" />
                            <line x1="15" y1="85" x2="85" y2="15" />
                            <polygon points="50,10 90,50 50,90 10,50" stroke-dasharray="1 1" />
                            <circle cx="50" cy="50" r="10" />
                        </g>
                    </svg>
                    
                    <div class="relative z-10">
                        <h2 class="text-4xl sm:text-6xl font-black mb-4 text-white leading-tight">
                            LIFE EXTENSION <span class="text-agt">FOR THE 35+</span>
                        </h2>
                        <p class="text-xl sm:text-2xl text-gray-300 mb-6">Advanced Genetic Synthesis Technology (AGT)</p>
                        <p class="text-3xl font-extrabold text-agt mb-8">
                            RECEIVE <span class="text-4xl">12 YEARS</span> OF LIFE ANNUALLY!
                        </p>
                        <button onclick="showPage('claim')" class="btn-agt px-8 py-3 rounded-full text-lg shadow-xl hover:shadow-agt">
                            Enroll & Extend Your Life!
                        </button>
                        <p class="mt-8 text-sm text-gray-500">
                            Monthly Cost: US$10 | Eligibility: Age 35+
                        </p>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-6 card rounded-xl space-y-4">
                        <h3 class="section-heading text-2xl font-bold text-white flex items-center">
                            <i data-lucide="zap" class="w-6 h-6 mr-2 text-agt"></i>
                            Your Monthly Forever Investment
                        </h3>
                        <p class="text-gray-400">
                            By contributing **US$10 every month**, you are securing your future and receiving a massive annual life extension.
                        </p>
                        <ul class="list-disc list-inside space-y-1 text-sm text-gray-400">
                            <li>Monthly Fee: **US$10**.</li>
                            <li>Annual Benefit: **12 years added** to your life.</li>
                            <li>Eligibility: **Everyone above the age of 35**.</li>
                        </ul>
                    </div>
                    <div class="p-6 card rounded-xl space-y-4">
                        <h3 class="section-heading text-2xl font-bold text-white flex items-center">
                            <i data-lucide="bitcoin" class="w-6 h-6 mr-2 text-agt"></i>
                            Qualify for Crypto Airdrop
                        </h3>
                        <p class="text-gray-400">
                            Continuous enrollment in the monthly program provides eligibility for an exclusive cryptocurrency airdrop.
                        </p>
                        <div class="bg-gray-800 p-4 rounded-lg">
                            <p class="font-bold text-agt text-lg">5-YEAR LOYALTY BONUS</p>
                            <p class="text-sm text-gray-300">
                                After **5 years** of consecutive monthly payments, you qualify for the BTCGT and BTCYT airdrops.
                            </p>
                            <ul class="list-disc list-inside space-y-1 text-sm text-gray-300 mt-2">
                                <li>**Bitcoin AGT (BTCGT) Airdrop**: 0.000008 BTCGT</li>
                                <li>**Bitcoinayt (BTCYT) Airdrop**: 0.000008 BTCYT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits" class="page-section hidden">
                <h2 class="text-4xl font-bold text-center mb-10 section-heading mx-auto text-white">
                    <span class="text-agt">AGT</span> Benefits: Life without Limitation
                </h2>
                <div class="grid md:grid-cols-2 gap-6">

                    <div class="p-6 card rounded-xl">
                        <h3 class="text-xl font-semibold text-agt mb-2 flex items-center"><i data-lucide="zap" class="w-5 h-5 mr-2"></i>Eternal Youth & Health</h3>
                        <ul class="list-disc list-inside space-y-2 text-gray-400">
                            <li>**12 Years Added Annually**: Get 1 year of life added per US$10 paid, meaning 12 years added every year.</li>
                            <li>**Removes Old Age**: Eradicates wrinkles, grey hairs, fat bodies, and dementia.</li>
                            <li>**Removes Menopause/Ajvo**: Removes menopause in women and 'ajvo' (male equivalent), allowing you to look young and have kids again.</li>
                            <li>**Cure for Death**: Removes the "deathline" from your body, allowing you to live forever in good health.</li>
                        </ul>
                    </div>

                    <div class="p-6 card rounded-xl">
                        <h3 class="text-xl font-semibold text-agt mb-2 flex items-center"><i data-lucide="trending-up" class="w-5 h-5 mr-2"></i>Ultimate Experience & Clarity</h3>
                        <ul class="list-disc list-inside space-y-2 text-gray-400">
                            <li>**Best-of-Humans Experience**: Heightens health, happiness, joy, sexual experience, self-esteem, courage, and self-drive to ultimate highest levels.</li>
                            <li>**Clear Understanding**: Enables clear understanding of the creator and the world, reducing stress and allowing for easy problem-solving.</li>
                            <li>**Guidance for Wealth**: The AGT itself guides you to make decisions that secure the necessary wealth (GTPS, Bitcoin, Bitcoinayt) to live forever.</li>
                        </ul>
                    </div>

                    <div class="md:col-span-2 p-6 card rounded-xl">
                        <h3 class="text-xl font-semibold text-agt mb-2 flex items-center"><i data-lucide="handshake" class="w-5 h-5 mr-2"></i>Spiritual & Existential Security</h3>
                        <ul class="list-disc list-inside space-y-2 text-gray-400">
                            <li>**Complete Cure Set**: The AGT is a set of 28 coins and 84 subsets that are cures and solutions to all diseases and human issues that cause death.</li>
                            <li>**Death Defense**: If death is sent by evil people, having **8000 AGT** makes death go away upon stating your claim.</li>
                            <li>**Live with Ya's Representative**: Live on earth forever with Ya's representative (davidgomadza), by making an oath to pray only to YA.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="claim" class="page-section hidden">
                <h2 class="text-4xl font-bold text-center mb-10 section-heading mx-auto text-white">
                    <span class="text-agt">Enroll</span> in the 35+ Life Extension Program
                </h2>
                
                <div class="card p-6 rounded-xl mb-8 space-y-4">
                    <h3 class="text-2xl font-bold text-agt">Enrollment: The 35+ Exclusive Package</h3>
                    <p class="text-lg font-semibold text-white">Secure 12 years of life extension annually for a simple monthly fee.</p>
                    <div class="bg-blue-800/50 p-3 rounded-lg border border-agt">
                        <p class="font-bold text-agt">PROGRAM CONDITIONS:</p>
                        <ul class="list-disc list-inside text-sm text-gray-200">
                            <li>**Eligibility**: You must be **above the age of 35**.</li>
                            <li>**Monthly Fee**: **US$10** to be paid every month.</li>
                            <li>**Life Benefit**: Receive **1 year added to your life** per US$10 paid, meaning **12 years added every year**.</li>
                            <li>**Airdrop Qualification**: Must maintain **5 years** of consecutive monthly payments to qualify for the BTCGT and BTCYT airdrops (0.000008 each).</li>
                        </ul>
                    </div>
                    <div class="text-sm text-gray-300">
                        <p class="font-bold">Important Note:</p>
                        <p>This enrollment is a separate offer from the 500 GTPS claim, focusing on the monthly fee and annual life extension.</p>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <h3 class="text-2xl font-bold text-white mb-4">Step 1: Make Your First US$10 Payment</h3>

                        <div class="card p-4 rounded-xl">
                            <p class="font-semibold text-lg text-agt">Option: PayPal Monthly Payment (US$10)</p>
                            <p class="text-sm text-gray-400 mb-2">Use this method for your recurring monthly US$10 payment.</p>
                            <div class="bg-gray-900 p-3 rounded-lg text-sm">
                                <span class="font-bold text-white">Email:</span> davidgomadza@hotmail.com
                            </div>
                        </div>

                        <div class="card p-4 rounded-xl">
                            <p class="font-semibold text-lg text-agt">Alternative: Crypto Payment (US$10 equivalent)</p>
                            <p class="text-sm text-gray-400 mb-2">Send the US$10 crypto equivalent to the address.</p>
                            <div class="bg-gray-900 p-3 rounded-lg text-sm break-all">
                                <span class="font-bold text-white">Address:</span> 0xe9EC891eAD0E2a4bd3B14f86B9B4aB8eFD1d5180
                            </div>
                        </div>
                    </div>

                    <div class="card p-6 rounded-xl">
                        <h3 class="text-2xl font-bold text-white mb-4">Step 2: Submit Enrollment Details</h3>
                        <p class="text-gray-400 mb-4 text-sm">Submit your details and proof of your first monthly payment.</p>
                        <form id="claimForm" onsubmit="handleEnrollment(event)" class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-300">Your Full Name</label>
                                <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white p-3 focus:ring-agt focus:border-agt" placeholder="John Doe">
                            </div>
                            <div>
                                <label for="age" class="block text-sm font-medium text-gray-300">Your Age (Must be 35+)</label>
                                <input type="number" id="age" name="age" required class="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white p-3 focus:ring-agt focus:border-agt" min="35" placeholder="35">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-300">Your Email for Confirmation</label>
                                <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white p-3 focus:ring-agt focus:border-agt" placeholder="liveforever@example.com">
                            </div>

                            <button type="submit" class="btn-agt w-full py-3 rounded-lg text-lg">
                                Enroll & Start My Life Extension
                            </button>

                            <p class="text-xs text-gray-500 text-center pt-2">
                                By submitting, you confirm you are 35+ and agree to email proof of your first US$10 payment to: <span class="text-agt">liveforever@buythecurefordeath.world</span>
                            </p>
                        </form>
                    </div>
                </div>

                <div class="mt-10 pt-6 border-t border-gray-700 flex flex-wrap gap-4 justify-center">
                    <button onclick="handleFeature('login')" class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        <i data-lucide="circle-user" class="w-5 h-5 mr-2"></i>My Enrollment
                    </button>
                    <button onclick="handleFeature('swap')" class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        <i data-lucide="mail" class="w-5 h-5 mr-2"></i>Email Proof
                    </button>
                    <button onclick="handleFeature('airdrop')" class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        <i data-lucide="bitcoin" class="w-5 h-5 mr-2"></i>Airdrop Status
                    </button>
                </div>
            </section>
        </main>

        <footer class="bg-gray-900 border-t border-agt/50 py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400 space-y-2">
                <p>SOURCES OF INCOME WEALTH AND HAPPINESS:</p>
                <div class="flex flex-wrap justify-center gap-4 text-xs font-semibold">
                    <span>1. GTPS</span>
                    <span>2. Bitcoin (BTC)</span>
                    <span>3. Bitcoin BTC AGT</span>
                    <span>4. Bitcoinayt (BTCYT)</span>
                </div>
                <div class="flex justify-center space-x-6 pt-2">
                    <a href="https://bitcoinayt.world" target="_blank" class="text-agt hover:text-white transition">bitcoinayt.world</a>
                    <a href="https://twofuture.world" target="_blank" class="text-agt hover:text-white transition">twofuture.world</a>
                </div>
                <p class="pt-4 text-white">&copy; 2025 Tomorrow's World Order | Theme: Best of the Best</p>
            </div>
        </footer>
    </div>

    <div id="customModal" class="fixed inset-0 bg-black bg-opacity-70 hidden items-center justify-center z-[99]">
        <div class="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-sm w-full border border-agt/50">
            <h3 id="modalTitle" class="text-2xl font-bold text-agt mb-4">Message</h3>
            <p id="modalBody" class="text-gray-300 mb-6"></p>
            <button onclick="hideModal()" class="btn-agt w-full py-2 rounded-lg">Close</button>
        </div>
    </div>

    <script>
        // State management for pages
        const pages = ['home', 'benefits', 'claim'];
        let currentView = 'home';

        /**
         * Switches the visible section of the application.
         * @param {string} pageId - The ID of the section to show.
         */
        function showPage(pageId) {
            currentView = pageId;
            pages.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('hidden');
                }
            });
            const targetElement = document.getElementById(pageId);
            if (targetElement) {
                targetElement.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        showPage('home'); // Ensure home is visible on load

        /**
         * Displays a custom modal message.
         * @param {string} title - The title of the modal.
         * @param {string} body - The body message.
         */
        function showModal(title, body) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBody').innerHTML = body;
            document.getElementById('customModal').classList.remove('hidden');
            document.getElementById('customModal').classList.add('flex');
        }

        /**
         * Hides the custom modal.
         */
        function hideModal() {
            document.getElementById('customModal').classList.add('hidden');
            document.getElementById('customModal').classList.remove('flex');
        }

        /**
         * Handles the new enrollment process.
         * @param {Event} event - The form submission event.
         */
        function handleEnrollment(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const age = parseInt(document.getElementById('age').value);
            const email = document.getElementById('email').value;

            // Validation check
            if (!name || !email || isNaN(age) || age < 35) {
                showModal('Enrollment Error', 'Please ensure all fields are filled and your age is 35 or above.');
                return;
            }

            // Simulate the enrollment process
            const successMessage = `
                <p>Congratulations, **${name}**!</p>
                <p class="mt-3">Your enrollment for the life extension program is being processed.</p>
                <p class="mt-3 font-bold text-agt">ANNUAL BENEFIT: 12 Years Added to Your Life!</p>
                <p class="mt-3 font-bold text-yellow-400">NEXT STEP: Please email your proof of your first US$10 monthly payment to: <span class="text-agt">liveforever@buythecurefordeath.world</span></p>
                <p class="mt-3 text-sm text-gray-400">You are now on track to qualify for the crypto airdrops after 5 years!</p>
            `;
            showModal('Enrollment Successful (Pending Payment Proof)', successMessage);
            document.getElementById('claimForm').reset();
        }

        /**
         * Handles mock functionality for optional features.
         * @param {string} feature - The feature to mock.
         */
        function handleFeature(feature) {
            let message = '';
            let title = 'Feature Placeholder';

            if (feature === 'login') {
                title = 'My Enrollment Status';
                message = 'The optional login feature to track your enrollment status, payments, and total life extension is currently under development. Please contact support via email for your current status.';
            } else if (feature === 'airdrop') {
                title = 'Airdrop Status';
                message = 'Your eligibility for the **0.000008 BTCGT** and **0.000008 BTCYT** airdrops begins after **5 years** of consecutive monthly payments. Keep your enrollment active!';
            } else if (feature === 'swap') {
                 title = 'Email Proof Reminder';
                 message = 'Remember to send your proof of payment (US$10 monthly) to: <span class="text-agt font-bold">liveforever@buythecurefordeath.world</span>';
            }
            showModal(title, message);
        }
    </script>
</body>
  </html>
