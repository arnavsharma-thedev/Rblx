document.addEventListener('DOMContentLoaded', () => {
    // Listen for clicks on the virtual keyboard
    document.getElementById('keyboard-container').addEventListener('click', (event) => {
        const keyElement = event.target.closest('button');
        if (keyElement) {
            const key = keyElement.dataset.key;
            console.log(`Key pressed: ${key}`);
            // You can add your game logic here
        }
    });

    // Listen for physical keyboard presses
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        
        // Check if the key is a letter, Enter, or Backspace
        if (key.length === 1 && key >= 'a' && key <= 'z') {
            console.log(`Physical key pressed: ${key}`);
            // Add your game logic here
        } else if (key === 'enter' || key === 'backspace') {
            console.log(`Physical key pressed: ${key}`);
            // Add your game logic here
        }
    });
});