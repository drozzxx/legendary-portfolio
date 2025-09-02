// Vertex Shader
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Fragment Shader
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;
varying vec3 vPosition;

#define PI 3.14159265359

// Hash function for pseudo-random numbers
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// Noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Star function
float star(vec2 uv, float flare) {
    float d = length(uv);
    float m = 0.05 / d;
    
    float rays = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
    m += rays * flare;
    
    return m;
}

void main() {
    vec2 uv = vUv;
    vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    
    vec3 col = vec3(0.0);
    
    // Time-based animation
    float t = uTime * 0.1;
    
    // Generate stars
    for(float i = 0.0; i < 3.0; i++) {
        vec2 q = p * (0.4 + 0.5 * i);
        q += vec2(0.22, 0.3) * i * 0.1 - t;
        
        float n = noise(q);
        float size = mix(0.5, 1.0, n);
        float flare = smoothstep(1.0, 0.2, n);
        
        vec2 starPos = vec2(0.5 + 0.5 * sin(i * 13.0 + t), 0.5 + 0.5 * cos(i * 17.0 + t));
        float s = star(q - starPos, flare * 0.3);
        s *= smoothstep(1.0, 0.2, n);
        col += s * size * vec3(0.5, 0.8, 1.0);
    }
    
    // Add some nebula-like effects
    vec2 nebula = p * 2.0 + t * 0.1;
    float neb = noise(nebula) * 0.5;
    col += neb * vec3(0.1, 0.2, 0.3) * 0.1;
    
    // Vignette effect
    float vignette = 1.0 - dot(p, p) * 0.25;
    col *= vignette;
    
    gl_FragColor = vec4(col, 1.0);
} 