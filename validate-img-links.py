import os
import re

# 🔧 Config: set your root folder and subfolder structure here
HTML_FOLDER = "."  # where your HTML files live (root)
IMG_FOLDER = "Images"  # adjust if nested elsewhere

# 🧠 Regex to extract all image src paths
IMG_REGEX = r'<img[^>]+src=["\']([^"\']+)["\']'

def find_html_files(folder):
    return [f for f in os.listdir(folder) if f.endswith(".html")]

def extract_img_paths(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    return re.findall(IMG_REGEX, content)

def validate_images(paths):
    results = {}
    for path in paths:
        local_path = os.path.normpath(os.path.join(HTML_FOLDER, path))
        results[path] = os.path.exists(local_path)
    return results

def run_validation():
    html_files = find_html_files(HTML_FOLDER)
    all_img_paths = set()

    for html_file in html_files:
        img_paths = extract_img_paths(os.path.join(HTML_FOLDER, html_file))
        all_img_paths.update(img_paths)

    results = validate_images(all_img_paths)

    print("\n🧪 Image Validation Results:")
    for path, exists in results.items():
        status = "✅ Found" if exists else "❌ Missing"
        print(f"{status}: {path}")

if __name__ == "__main__":
    run_validation()
