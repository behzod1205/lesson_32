-- Active: 1759320660083@@localhost@5432@mydb@public


CREATE TABLE tournaments(
    tournament_id SERIAL PRIMARY KEY,
    tournament_name VARCHAR(250) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'upcoming'
);

-- insert into tournaments (tournament_id, tournament_name, start_date, end_date) values (1, 'Laliga', '8/31/2025', '5/25/2026');
-- insert into tournaments (tournament_id, tournament_name, start_date, end_date) values (2, 'UCL', '9/15/2025', '6/4/2026');
-- insert into tournaments (tournament_id, tournament_name, start_date, end_date) values (3, 'APL', '8/30/2025', '5/30/2026');
-- insert into tournaments (tournament_id, tournament_name, start_date, end_date) values (4, 'Bundesliga', '8/19/2025', '6/8/2025');
-- insert into tournaments (tournament_id, tournament_name, start_date, end_date) values (5, 'A series', '9/8/2025', '6/20/2026');
--------------------------------------------------------------------------------

CREATE TABLE tournament_groups(
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(50) NOT NULL,
    tournament_id INT NOT NULL REFERENCES tournaments(tournament_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE football_clubs(
    club_id SERIAL PRIMARY KEY,
    club_name VARCHAR(250) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    founded_year INT
);

CREATE TABLE teams(
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(250) NOT NULL,
    club_id INT NOT NULL REFERENCES football_clubs(club_id) ON DELETE CASCADE,
    group_id INT NOT NULL REFERENCES tournament_groups(group_id) ON DELETE CASCADE,
    coach_name VARCHAR(250)
);

CREATE TABLE match_fixtures(
    match_id SERIAL PRIMARY KEY,
    match_date TIMESTAMP NOT NULL,
    venue VARCHAR(250) NOT NULL,
    home_team_id INT NOT NULL REFERENCES teams(team_id) ON DELETE CASCADE,
    away_team_id INT NOT NULL REFERENCES teams(team_id) ON DELETE CASCADE,
    home_score INT DEFAULT 0,
    away_score INT DEFAULT 0,
    tournament_id INT NOT NULL REFERENCES tournaments(tournament_id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'scheduled'
);

CREATE TABLE players(
    player_id SERIAL PRIMARY KEY,
    full_name VARCHAR(250) NOT NULL,
    date_of_birth DATE NOT NULL,
    position VARCHAR(100) NOT NULL,
    team_id INT NOT NULL REFERENCES teams(team_id) ON DELETE CASCADE,
    jersey_number INT NOT NULL
);