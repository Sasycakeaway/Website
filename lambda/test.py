from pprint import pprint
import boto3
from botocore.exceptions import ClientError


def get_movie(title, year, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('sasy_s_cake_away')

    try:
        response = table.get_item(Key={'username': year, 'password': title})
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Item']


if __name__ == '__main__':
    movie = get_movie(user, password,)
    if movie:
        print("Get movie succeeded:")
        pprint(movie, sort_dicts=False)