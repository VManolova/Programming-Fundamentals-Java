function solve(radius, height) {
    const pi = Math.PI;
    let r = radius;
    let h = height;
    let volume = pi * r * r * h / 3;
    let surfaceArea = pi * r*(r + Math.sqrt(h * h + r * r));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

solve(3, 5)