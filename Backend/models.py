from database import db

class Prod(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    price = db.Column(db.Integer)
    discount = db.Column(db.Integer)
    image = db.Column(db.String(500))

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "discount": self.discount,
            "image": self.image
        }
    