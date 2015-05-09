students =  %w(
    Walli-Smith
    Robert-Ungar
    Katie-Donley
    Bobby-Muldoon
    Brian-Correa
    Ron-Rivera
    Peggy-Jean-Louis
    Sanjay-Madan
    Christina-Wei
    Kristy-Lyons
    Simon-Babba
    Katie-Salisbury
    Vivian-Lo
    Brian-Bier
    Ahmad-Tahoun
    Martín-Beauchamp
)

5.times{ students = students.shuffle}
students.each_slice(2){|e| p e}
# p students.sample

