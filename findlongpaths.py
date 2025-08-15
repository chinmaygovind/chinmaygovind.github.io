import os

def find_longest_paths(root_dir, top_n=10):
    all_paths = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for name in dirnames + filenames:
            full_path = os.path.join(dirpath, name)
            all_paths.append(full_path)
    # Sort by length descending
    all_paths.sort(key=lambda p: len(p), reverse=True)
    print(f"Top {top_n} longest paths:")
    for path in all_paths[:top_n]:
        print(f"{len(path)} chars: {path}")

if __name__ == "__main__":
    # Change 'public' to your target directory
    find_longest_paths("public", top_n=10)