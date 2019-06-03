# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_03_143917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leagues", force: :cascade do |t|
    t.string "name"
    t.integer "limit"
    t.integer "league_pin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leagues_users", id: false, force: :cascade do |t|
    t.bigint "league_id", null: false
    t.bigint "user_id", null: false
    t.index ["league_id", "user_id"], name: "index_leagues_users_on_league_id_and_user_id"
    t.index ["user_id", "league_id"], name: "index_leagues_users_on_user_id_and_league_id"
  end

  create_table "player_pools", force: :cascade do |t|
    t.string "displayName"
    t.float "points"
    t.string "team"
    t.string "position"
    t.string "playerId"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "displayName"
    t.string "nfl_team"
    t.float "points"
    t.string "position"
    t.string "playerId"
    t.boolean "selected"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "team_id"
    t.string "active"
    t.string "jersey"
    t.string "fname"
    t.string "lname"
    t.string "height"
    t.string "weight"
    t.string "dob"
    t.string "college"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.float "points"
    t.string "qb"
    t.string "rb1"
    t.string "rb2"
    t.string "te"
    t.string "wr1"
    t.string "wr2"
    t.string "def"
    t.string "k"
    t.string "flex"
    t.string "bn1"
    t.string "bn2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "league_id"
    t.index ["league_id"], name: "index_teams_on_league_id"
  end

  create_table "teams_users", id: false, force: :cascade do |t|
    t.bigint "team_id", null: false
    t.bigint "user_id", null: false
    t.index ["team_id", "user_id"], name: "index_teams_users_on_team_id_and_user_id"
    t.index ["user_id", "team_id"], name: "index_teams_users_on_user_id_and_team_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.boolean "commish"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
