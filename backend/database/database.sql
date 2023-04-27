CREATE DATABASE prodmata;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE beats(
	beat_id UUID DEFAULT UUID_generate_v4(),
	beat_name VARCHAR(255),
	beat_price INTEGER,
	beat_file_url VARCHAR(255),
	beat_video_url VARCHAR(255),
    beat_img VARCHAR(255),
  PRIMARY KEY(beat_id)
);