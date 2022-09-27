def bin_to_num(binary):
    return int(binary, 2)


def num_to_bin(num):
    return bin(num)[2:]

def empathy(B1, B2):
    num_b1 = bin_to_num(binary=B1)
    num_b2 = bin_to_num(binary=B2)
    
    num_b3 = num_b1 * num_b2
    
    B3 = num_to_bin(num_b3)
    
    return B3


if __name__ == "__main__":
    B1 = input()
    B2 = input()
    
    print(empathy(B1, B2))
