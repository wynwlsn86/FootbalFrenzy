# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Player.create(displayName: 'Tony Romo', team: 'DAL', position: 'QB', points: 0)

# PlayerPool.create(displayName: 'Troy Aikman', team: 'DAL', position: 'QB', points: 0)

User.create(email: 'test@test.com', password: 'test', commish: true)
User.create(email: 'test2@test2.com', password: 'test2', commish: true)

League.create(name: 'test league2', limit: 16, league_pin: 12345)
League.create(name: 'test league', limit: 16, league_pin: 12345)

dallas = Team.create(name: 'test team', points: 0)
Team.create(name: 'test team2', points: 0)
Team.create(name: 'test team3', points: 0)
Team.create(name: 'test team4', points: 0)


# PlayerPool.create(displayName: 'Tony Romo', team: 'DAL', position: 'QB', points: 0)
Player.create(displayName: 'Troy Aikman', nfl_team: 'DAL', position: 'QB', points: 0, team_id: dallas.id)
Player.create(displayName: 'This Aikman', nfl_team: 'DAL', position: 'QB', points: 0, team_id: dallas.id)
Player.create(displayName: 'This Aikman', nfl_team: 'DAL', position: 'QB', points: 0)
# author1.books.push(book1, book2)

User.find(1).leagues.push(League.find(1), League.find(2))
User.find(1).teams.push(Team.find(3), Team.find(4))

# test = Player.find(1)
# test(team_id: 1)