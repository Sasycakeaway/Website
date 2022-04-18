"""
Implementation of cryptography of Database of Sasy's cake Away in some part of user data (not all :-) )
From: https://stackoverflow.com/questions/12524994/encrypt-decrypt-using-pycrypto-aes-256
""" 

import os
import hashlib
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

_BLOCK_SIZE = 16

class AesStringCipher:
    def __init__(self, key): 
        self._key = hashlib.sha256(key.encode()).digest()

    def encrypt_str(self, raw:str) -> bytes:
        iv = os.urandom(_BLOCK_SIZE)
        cipher = Cipher(algorithms.AES(self._key), modes.CBC(iv))
        encryptor = cipher.encryptor()
        raw = _pad(raw)
        return iv + encryptor.update(raw.encode('utf-8')) + encryptor.finalize()

    def decrypt_str(self, enc:bytes) -> str:
        iv = enc[:_BLOCK_SIZE]
        enc = enc[_BLOCK_SIZE:]
        cipher = Cipher(algorithms.AES(self._key), modes.CBC(iv))
        decryptor = cipher.decryptor()
        raw = decryptor.update(enc) + decryptor.finalize()
        raw = raw.decode('utf-8')
        return _unpad(raw)

def _pad(s:str) -> str:
    padding = (_BLOCK_SIZE - (len(s) % _BLOCK_SIZE))
    return s + padding * chr(padding)

def _unpad(s:str) -> str:
    return s[:-ord(s[len(s)-1:])]


if __name__ == '__main__':
    cipher = AesStringCipher('my secret password')
    secret_msg = 'this is a super secret msg ...'
    enc_msg = cipher.encrypt_str(secret_msg)
    dec_msg = cipher.decrypt_str(enc_msg)
    print(enc_msg)
    print(dec_msg)
    assert secret_msg == dec_msg