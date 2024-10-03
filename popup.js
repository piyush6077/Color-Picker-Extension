document.getElementById("pickColorBtn").addEventListener("click", async () => {
    try {
        const eyeDropper = new EyeDropper();
        const selectedColor = await eyeDropper.open();
        console.log(selectedColor)
        const colorCode = selectedColor.sRGBHex; // Get the color in sRGBHex format
        await navigator.clipboard.writeText(colorCode);

        const rgbColor = hexToRgb(colorCode);
        document.getElementById("colorCode").textContent = colorCode;
        document.getElementById("colorComp").style.backgroundColor = colorCode;
        document.getElementById("colorCodeRGB").textContent = rgbColor;
        document.getElementById("colorDisplay").style.backgroundColor = colorCode;
        console.log("Selected Color:", colorCode);
    } catch (error) {
        console.log("Error EyeDropper:", error);
    }    
});

function hexToRgb(hex) {
    // Here removing the '#' symbol 
    hex = hex.replace(/^#/, '');

    // Parse the hex color code
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}
