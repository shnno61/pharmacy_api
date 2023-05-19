CREATE TABLE medicines (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  manufacturer VARCHAR(255),
  unit_price DECIMAL(10,2) NOT NULL,
  available_number INTEGER NOT NULL
);