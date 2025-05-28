import os
import trimesh
import pandas as pd
# import ace_tools as tools

# Specify the directory containing your GLB models
model_dir = 'models'
if not os.path.exists(model_dir):
    # For demonstration purposes, if the models directory doesn't exist, create dummy entries
    model_files = ['/mnt/data/models/dish1.glb', '/mnt/data/models/dish2.glb']
else:
    model_files = [os.path.join(model_dir, f) for f in os.listdir(model_dir) if f.endswith('.glb')]

rows = []
for path in model_files:
    try:
        mesh = trimesh.load(path, force='mesh')
        size = mesh.extents  # [width, height, depth]
        rows.append({
            'Model': os.path.basename(path),
            'Width (m)': round(size[0], 3),# The size along the X-axis – usually considered width                 
            'Height (m)': round(size[1], 3),#The size along the Y-axis – usually considered height
            'Depth (m)': round(size[2], 3)# The size along the Z-axis – usually considered depth

        })

    except Exception as e:
        rows.append({
            'Model': os.path.basename(path),
            'Width (m)': 'Error',
            'Height (m)': 'Error',
            'Depth (m)': 'Error'
        })

df = pd.DataFrame(rows)

# Display the dimensions to the user
print("Saving the Model dimensions in Model_dimensions.csv....")
df.to_csv("Model_dimensions.csv",index=False)
print("Saved the Model dimensions in Model_dimensions.csv!")