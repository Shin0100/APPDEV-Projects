import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
    const {
        name,
        description,
        switchType,
        keyLayout,
        backlighting,
        connectivity,
        dimensions,
        weight,
        cableLength,
        additionalFeatures,
    } = props;

    return (
        <div className="body-container">
            <section id="product-overview">
                <h1>{name}</h1>
                <p>{description}</p>
            </section>

            <section id="specifications">
                <h3>Specifications</h3>
                <ul>
                    <li>Switch Type: {switchType}</li>
                    <li>Key Layout: {keyLayout}</li>
                    <li>Backlighting: {backlighting.join(', ')}</li>
                    <li>Connectivity: {connectivity}</li>
                    <li>Dimensions: {dimensions}</li>
                    <li>Weight: {weight}</li>
                    <li>Cable Length: {cableLength}</li>
                    <li>Additional Features: {additionalFeatures}</li>
                </ul>
            </section>

            <section id="in-the-box">
                <h3>In the Box</h3>
                <ul>
                    <li>{name} Keyboard</li>
                    <li>USB Cable</li>
                    <li>User Manual</li>
                    <li>Keycap Removal Tool</li>
                    <li>Warranty Card</li>
                </ul>
            </section>

            <section id="key-features">
                <h3>Key Features</h3>
                <ul>
                    <li>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.</li>
                    <li>Mechanical Switches: {switchType} for a responsive and smooth typing experience.</li>
                    <li>Programmable Keys: Assign macros and custom functions to any key with the included software.</li>
                    <li>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.</li>
                    <li>Dedicated Media Controls: Easily control music and videos with dedicated media keys.</li>
                </ul>
            </section>

            <section id="setup-instructions">
                <h3>Setup Instructions</h3>
                <h4>Unboxing:</h4>
                <p>Carefully remove the keyboard and accessories from the box.</p>
                <h4>Connecting the Keyboard:</h4>
                <ul>
                    <li>Plug the USB cable into an available USB port on your computer.</li>
                    <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
                </ul>
                <h4>Software Installation (Optional):</h4>
                <ul>
                    <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                    <li>Follow the on-screen instructions to install the software.</li>
                </ul>
            </section>

            <section id="using-keyboard">
                <h3>Using the Keyboard</h3>
                <h4>Basic Typing:</h4>
                <p>Simply start typing; the keyboard is pre-configured with standard key mappings.</p>
                <h4>Customizing Backlighting:</h4>
                <ul>
                    <li>Press Fn + F9 to cycle through preset lighting effects.</li>
                    <li>Use the configuration software to create custom lighting profiles.</li>
                </ul>
                <h4>Programming Keys:</h4>
                <p>Open the configuration software to assign macros or functions.</p>
            </section>

            <section id="troubleshooting">
                <h3>Troubleshooting</h3>
                <h4>Keyboard Not Responding:</h4>
                <ul>
                    <li>Ensure the USB connection is secure.</li>
                    <li>Try connecting the keyboard to a different USB port.</li>
                    <li>Restart your computer if necessary.</li>
                </ul>
                <h4>Backlighting Not Working:</h4>
                <ul>
                    <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
                    <li>Verify that the configuration software is properly installed.</li>
                </ul>
            </section>

            <section id="maintenance-care">
                <h3>Maintenance and Care</h3>
                <h4>Cleaning:</h4>
                <ul>
                    <li>Disconnect the keyboard from the computer.</li>
                    <li>Use a soft, dry cloth to clean the surface.</li>
                    <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
                </ul>
                <h4>Storage:</h4>
                <ul>
                    <li>Store the keyboard in a cool, dry place.</li>
                    <li>Avoid exposure to liquids or extreme temperatures.</li>
                </ul>
            </section>

            <section id="warranty-support">
                <h3>Warranty and Support</h3>
                <ul>
                    <li>Warranty Period: 2 years from the date of purchase.</li>
                    <li>Customer Support: For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.</li>
                </ul>
                <p>Manufacturer’s Website: <a href="http://www.keyboardcompany.com" target="_blank" rel="noopener noreferrer">www.keyboardcompany.com</a></p>
                <p>Customer Support Email: <a href="mailto:support@keyboardcompany.com">support@keyboardcompany.com</a></p>
                <p>Support Hotline: <a href="tel:18005551234">1-800-555-1234</a></p>
            </section>

            <section>
                <p>Thank you for choosing the {name}. We hope you enjoy your new keyboard! Type Safe!</p>
            </section>
        </div>
    );
};

// Define prop types
Body.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    switchType: PropTypes.string.isRequired,
    keyLayout: PropTypes.string.isRequired,
    backlighting: PropTypes.arrayOf(PropTypes.string).isRequired,
    connectivity: PropTypes.string.isRequired,
    dimensions: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    cableLength: PropTypes.string.isRequired,
    additionalFeatures: PropTypes.string.isRequired,
};

// Define default props
Body.defaultProps = {
    name: "KB X1000",
    description: "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort.",
    switchType: "Cherry MX Red (Mechanical)",
    keyLayout: "Full-size (104 keys)",
    backlighting: ["RGB with customizable colors"],
    connectivity: "Wired (USB 2.0)",
    dimensions: "440 mm x 135 mm x 35 mm",
    weight: "1.2 kg",
    cableLength: "1.8 meters",
    additionalFeatures: "Anti-ghosting, N-key rollover, dedicated media controls",
};

export default Body;
