import aes, os
print(os.urandom(16))
key = str.encode("sdasd")   #magari da 16 byte
iv = str.encode("asdads")
encrypted = aes.AES(key).encrypt_ctr(str.encode('Attack at dawn'), iv)
print(aes.AES(key).decrypt_ctr(encrypted, iv))
