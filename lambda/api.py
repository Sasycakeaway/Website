import aes
import json
import boto3
import os


key = str.encode("pass")
iv = str.encode("pass")
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('sasy_s_cake_away')
def lambda_handler(event, context):
    first=json.loads(event['body'])
    if first['type']=="read":
        try:
            response = table.get_item(
                Key={
                    "username":first['username'],
                    "password":first['password']
                    }
            )
            item = response
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                   'Content-Type': 'application/json'
                },
                'body': json.dumps(item)
            }
        except Exception as e:
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json.dumps(str(e))
            }  
    elif first['type']=="write":
        response = table.put_item(
            Item={
                'username': first['username'],
                'password': first['password'],
                'telefono': str(aes.AES(key).encrypt_ctr(str.encode(first['telefono']), iv)),
                'nascita': str(aes.AES(key).encrypt_ctr(str.encode(first['nascita']), iv)),
                'cf': str(aes.AES(key).encrypt_ctr(str.encode(first['cf']), iv))
            }
        )
    return { 'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Content-Type': 'application/json'
                }, 
                'body': json.dumps(response)}
    


