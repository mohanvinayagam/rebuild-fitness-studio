from PIL import Image, ImageEnhance, ImageOps
import os

BRAIN_DIR = r"C:\Users\m\.gemini\antigravity\brain\178063a0-56a6-42a4-8aba-332305183cf3"
OUTPUT_DIR = r"C:\Users\m\.gemini\antigravity\scratch\rebuild-fitness-studio\public\images"

# The 5 original photos
PHOTOS = [
    ("hero-bg.webp", "media__1789016861389.jpg", 1920),       # Photo 1
    ("cardio.webp", "media__1789016861399.jpg", 800),         # Photo 2
    ("recovery.webp", "media__1789016861408.jpg", 800),       # Photo 3
    ("training.webp", "media__1789016861438.jpg", 1200),      # Photo 4 (used for CTA too)
    ("functional.webp", "media__1789016861449.jpg", 1200),    # Photo 5 (used for About too)
]

def enhance_image(img_path, max_width):
    img = Image.open(img_path)
    img = ImageOps.exif_transpose(img)
    
    w, h = img.size
    if w > max_width:
        ratio = max_width / w
        img = img.resize((max_width, int(h * ratio)), Image.LANCZOS)
    
    if img.mode != "RGB":
        img = img.convert("RGB")
    
    # Enhancements (realistic)
    # 1. Contrast
    enhancer_contrast = ImageEnhance.Contrast(img)
    img = enhancer_contrast.enhance(1.05)
    
    # 2. Color (Saturation)
    enhancer_color = ImageEnhance.Color(img)
    img = enhancer_color.enhance(1.1)
    
    # 3. Brightness (Exposure)
    enhancer_brightness = ImageEnhance.Brightness(img)
    img = enhancer_brightness.enhance(1.05)
    
    # 4. Sharpness
    enhancer_sharpness = ImageEnhance.Sharpness(img)
    img = enhancer_sharpness.enhance(1.2)
    
    return img

def main():
    print("Enhancing gym photos to WebP...")
    for out_name, src_name, max_width in PHOTOS:
        src_path = os.path.join(BRAIN_DIR, src_name)
        out_path = os.path.join(OUTPUT_DIR, out_name)
        
        img = enhance_image(src_path, max_width)
        img.save(out_path, "WEBP", quality=85, method=6)
        
        print(f"Processed {src_name} -> {out_name} (Size: {os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    main()
