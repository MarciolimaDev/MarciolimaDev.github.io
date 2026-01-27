from PIL import Image
from collections import Counter

def get_dominant_colors(image_path, num_colors=3):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((150, 150))  # Resize for faster processing
        pixels = list(image.getdata())
        counts = Counter(pixels)
        dominant = counts.most_common(num_colors)
        
        print("Dominant Colors:")
        for color, count in dominant:
            print(f"RGB: {color}, Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Use raw string for Windows path
    image_path = r"C:/Users/marcl/.gemini/antigravity/brain/15885e9b-a586-43c5-9994-25dad984a087/uploaded_media_1769475389768.png"
    get_dominant_colors(image_path)
