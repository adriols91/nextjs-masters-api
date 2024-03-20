import json
import sqlite3

from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

connection = sqlite3.connect('./prisma/dev.db')

cursor = connection.cursor()

cursor.execute("SELECT id, name, description FROM Product")

products = cursor.fetchall()

products_data = {}

for product in products:
    id, name, description = product

    products_data[id] = {
        "id": id,
        "name": name,
        "description": description,
        "categories": [],
        "collections": []
    }

cursor.execute("""
    SELECT pcat.B, cat.name
    FROM _ProductToCategory pcat
    JOIN Category cat ON pcat.A = cat.id
""")
for product_id, category_name in cursor.fetchall():
    if product_id in products_data:
        products_data[product_id]["categories"].append(category_name)

cursor.execute("""
    SELECT pcol.B, col.name
    FROM _ProductToCollection pcol
    JOIN Collection col ON pcol.A = col.id
""")
for product_id, collection_name in cursor.fetchall():
    if product_id in products_data:
        products_data[product_id]["collections"].append(collection_name)

products_list = list(products_data.values())

try:
    for product in products_list:
        print(product)

        sentences = [f'{product["name"]}. {product["description"]}. {". ".join(product["categories"])}. {". ".join(product["collections"])}']
        sentence_embeddings = model.encode(sentences)

        vectors_json = json.dumps(sentence_embeddings[0].tolist())

        cursor.execute("UPDATE Product SET vectors = ? WHERE id = ?", (vectors_json, product["id"]))
    
    connection.commit()
except sqlite3.Error as error:
    connection.rollback()
    raise error
finally:
    connection.close()
