import json
import csv
import os
import re

# Define the input and output file paths
INPUT_FILE = 'week12.json'
OUTPUT_FILE = 'week13.csv'

# Define the CSV headers
CSV_HEADERS = [
    'gameid', 'date', 'time', 'away_team', 'home_team',
    'by_pts', 'away_pred', 'home_pred', 'won_sims',
    'avg_margin', 'actual_win_team', 'away_actual',
    'home_actual', 'result_fav_num', 'result_fav',
    'pred_total'
]

def parse_teams(teams_str):
    """
    Parses the 'teams' field to extract away_team and home_team.

    Args:
        teams_str (str): The teams string, e.g., "Pittsburgh Steelers @ Cleveland Browns"

    Returns:
        tuple: (away_team, home_team)
    """
    if '@' in teams_str:
        away_team, home_team = teams_str.split('@')
        return away_team.strip(), home_team.strip()
    else:
        return '', ''

def parse_actual_score(actual_score_str):
    """
    Parses the 'actual_score' field to extract away_actual and home_actual.

    Args:
        actual_score_str (str): The actual score string, e.g., "19.4-19.3"

    Returns:
        tuple: (away_actual, home_actual)
    """
    if '-' in actual_score_str:
        away_actual, home_actual = actual_score_str.split('-')
        try:
            return float(away_actual.strip()), float(home_actual.strip())
        except ValueError:
            return '', ''
    else:
        return '', ''

def parse_result(result_str):
    """
    Parses the 'result' field to extract result_fav_num, result_fav, pred_total.

    Args:
        result_str (str): The result string from the JSON.

    Returns:
        tuple: (result_fav_num, result_fav, pred_total)
    """
    if not result_str:
        return '', '', ''

    # Initialize defaults
    result_fav_num = ''
    result_fav = ''
    pred_total = ''

    # Determine if the pick was correct
    if 'Correct' in result_str:
        result_fav_num = 1
        result_fav = 'Y'
    elif 'Incorrect' in result_str:
        result_fav_num = 0
        result_fav = 'N'
    else:
        result_fav_num = ''
        result_fav = ''

    # Extract predicted margin within parentheses or specific pattern
    # Example: "Correct Pick Margin within 7 pts Beat the Spread"
    margin_match = re.search(r'within (\d+\.?\d*) pts', result_str)
    if margin_match:
        pred_total = margin_match.group(1)
    else:
        pred_total = ''

    return result_fav_num, result_fav, pred_total

def main():
    # Check if the input file exists
    if not os.path.exists(INPUT_FILE):
        print(f"Error: The file '{INPUT_FILE}' does not exist.")
        return

    # Read the JSON data
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            games = data.get('games', [])
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON file: {e}")
        return

    # Prepare data for CSV
    csv_data = []
    game_id = 1
    for game in games:
        date = game.get('date', '')
        time = game.get('time', '')
        teams = game.get('teams', '')
        away_team, home_team = parse_teams(teams)
        by_pts = game.get('predicted_margin', '')

        # Assuming 'away_pred' and 'home_pred' represent predicted scores,
        # but since only 'predicted_winner' and 'predicted_margin' are available,
        # we'll derive them based on the predicted winner and margin.

        predicted_winner = game.get('predicted_winner', '')
        predicted_margin = game.get('predicted_margin', 0)

        # Assign predicted scores based on winner and margin
        # This is a simplistic approach and may need adjustment based on actual prediction logic
        if predicted_winner == away_team:
            away_pred = predicted_margin + 10  # Arbitrary base score
            home_pred = away_pred - predicted_margin
        elif predicted_winner == home_team:
            home_pred = predicted_margin + 10  # Arbitrary base score
            away_pred = home_pred - predicted_margin
        else:
            away_pred = ''
            home_pred = ''

        # Simulation win percentage
        simulation_win_percentage = game.get('simulation_win_percentage', '')
        won_sims = simulation_win_percentage / 100 if simulation_win_percentage else ''

        # Average margin
        avg_margin = game.get('average_margin', '')

        # Actual win team
        actual_win_team = game.get('actual_winner', '')

        # Actual scores
        actual_score_str = game.get('actual_score', '')
        away_actual, home_actual = parse_actual_score(actual_score_str)

        # Result parsing
        result_str = game.get('result', '')
        result_fav_num, result_fav, pred_total = parse_result(result_str)

        csv_row = {
            'gameid': game_id,
            'date': date,
            'time': time,
            'away_team': away_team,
            'home_team': home_team,
            'by_pts': by_pts,
            'away_pred': away_pred,
            'home_pred': home_pred,
            'won_sims': won_sims,
            'avg_margin': avg_margin,
            'actual_win_team': actual_win_team,
            'away_actual': away_actual,
            'home_actual': home_actual,
            'result_fav_num': result_fav_num,
            'result_fav': result_fav,
            'pred_total': pred_total
        }

        csv_data.append(csv_row)
        game_id += 1

    # Write to CSV
    try:
        with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=CSV_HEADERS)
            writer.writeheader()
            for row in csv_data:
                writer.writerow(row)
        print(f"Data successfully extracted to '{OUTPUT_FILE}'.")
    except Exception as e:
        print(f"Error writing to CSV: {e}")

if __name__ == '__main__':
    main()
