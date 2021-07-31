# Question-1_StringInsert5  

# Question-1_StringInsert5

��l�D��  
[image](./image/OriginalQuestion.bmp)  

Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N.  

Example:  
1. Given N = 268, the function should return 5268.  
2. Given N = 670, the function should return 6750.  
3. Given N = 0, the function should return 50.  
4. Given N = -999, the function should return -5999.  

Assume that:  
* N is an integer within the range [-8,000..8,000].  

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.  

�̪�b�����W�ݨ즳�쪺�D�ءA
�ЧA�g�� funtion �A  
���A�@�Ӿ��N�A  
�� 5 ���N���J���N�������m�A���X�U�رƦC�զX���Ʀr�A  
�åB��^�Ҧ��Ʀr�զX�����̤j�ȡC  

�|�Ҩӻ����w 268 �A���{�����Ӫ�^ 5268�A  
N���d��  
-8000 <= N <= 8000  

�Ѫk�����T�ʳ̭��n�A  
�ѨM��ת��įण�O���D�Ҷq�����I�C  

�o�D�ڪ����D����O�����J�Ʀr�ন�r��A  
���ۦr��A���Φ��@�Ӥ@�Ӫ��r��}�C�A  
�M��A�̧Ǳq�}�C�e������᭱�A  
�H���ͥX�\�h���P�ƦC�զX���r��}�C�A  
�̫�r��}�C�ഫ�^�r��A�ഫ�^�Ʀr�C
�A�q�o�ǼƦr����X�̤j�Ȩæ^�ǡC  

�w�e�ǳơG

1. ���h [Node.js�x��](https://nodejs.org/en/) �U�� Node.js 14.17.4���A�æw�˦b�q���W�C  
2. ���} �R�O���ܦr�� �A�� `cd` ���O�����u�@�ؿ���M�׸�Ƨ��ڥؿ��C  
3. ���ۤU���O `npm install` �h�� npm�M��޲z�� �ھ� �M�� package.json ���]�w�U�����] node_modules �C  
4. �U���O `npm run test` �Y�i�] Unit Test �h���էA�g�b solution function �̪��{���X�O�_��q�L���ո�ơC  

���䳡���{���X�b `./test/json.test.js` �̪� solution��ơC  

���W�{�� Unit Test ���浲�G  
[image](./image/result1.bmp)  

���W�u�W���� Unit Test ���浲�G  
[image](./image/result2.bmp)  
