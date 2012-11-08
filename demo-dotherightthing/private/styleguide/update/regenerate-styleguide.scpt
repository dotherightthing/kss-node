FasdUAS 1.101.10   ��   ��    k             l     ��  ��      on run {input, parameters}     � 	 	 4 o n   r u n   { i n p u t ,   p a r a m e t e r s }   
  
 l     ��  ��    � � description: to allow us to store regenerate-styleguide.app separately from the project assets, we load KSS configuration from a developer-managed XML (.plist) file      �  L   d e s c r i p t i o n :   t o   a l l o w   u s   t o   s t o r e   r e g e n e r a t e - s t y l e g u i d e . a p p   s e p a r a t e l y   f r o m   t h e   p r o j e c t   a s s e t s ,   w e   l o a d   K S S   c o n f i g u r a t i o n   f r o m   a   d e v e l o p e r - m a n a g e d   X M L   ( . p l i s t )   f i l e        l     ��  ��    p j note: the easiest way to test and edit this script is to use Spotlight to search for AppleScript Editor 	     �   �   n o t e :   t h e   e a s i e s t   w a y   t o   t e s t   a n d   e d i t   t h i s   s c r i p t   i s   t o   u s e   S p o t l i g h t   t o   s e a r c h   f o r   A p p l e S c r i p t   E d i t o r   	      l     ��  ��    W Q useful: http://lists.apple.com/archives/applescript-users/2009/Feb/msg00054.html     �   �   u s e f u l :   h t t p : / / l i s t s . a p p l e . c o m / a r c h i v e s / a p p l e s c r i p t - u s e r s / 2 0 0 9 / F e b / m s g 0 0 0 5 4 . h t m l      l     ��  ��    � � useful: http://www.mactech.com/articles/mactech/Vol.22/22.03/StoringandAccessingData/index.html - "Retrieving Properties From a Property List File"     �  (   u s e f u l :   h t t p : / / w w w . m a c t e c h . c o m / a r t i c l e s / m a c t e c h / V o l . 2 2 / 2 2 . 0 3 / S t o r i n g a n d A c c e s s i n g D a t a / i n d e x . h t m l   -   " R e t r i e v i n g   P r o p e r t i e s   F r o m   a   P r o p e r t y   L i s t   F i l e "      l     ��   !��     3 - last updated: Thurs 08.11.2012 @ 14.45 by DS    ! � " " Z   l a s t   u p d a t e d :   T h u r s   0 8 . 1 1 . 2 0 1 2   @   1 4 . 4 5   b y   D S   # $ # l    � %���� % O     � & ' & k    � ( (  ) * ) l   �� + ,��   + P J get path to /myfolder/private/styleguide/update/regenerate-styleguide.app    , � - - �   g e t   p a t h   t o   / m y f o l d e r / p r i v a t e / s t y l e g u i d e / u p d a t e / r e g e n e r a t e - s t y l e g u i d e . a p p *  . / . r     0 1 0 I   	�� 2��
�� .earsffdralis        afdr 2  f    ��   1 o      ���� 0 automator_app_path   /  3 4 3 l   �� 5 6��   5 / ) get path to /myfolder/private/styleguide    6 � 7 7 R   g e t   p a t h   t o   / m y f o l d e r / p r i v a t e / s t y l e g u i d e 4  8 9 8 r     : ; : c     < = < l    >���� > n     ? @ ? m    ��
�� 
ctnr @ n     A B A m    ��
�� 
ctnr B l    C���� C o    ���� 0 automator_app_path  ��  ��  ��  ��   = m    ��
�� 
alis ; o      ���� 0 private_styleguide_folder   9  D E D l   �� F G��   F 6 0 get path to /myfolder/private/styleguide/update    G � H H `   g e t   p a t h   t o   / m y f o l d e r / p r i v a t e / s t y l e g u i d e / u p d a t e E  I J I r     K L K l    M���� M b     N O N l    P���� P n     Q R Q 1    ��
�� 
psxp R l    S���� S c     T U T o    ���� 0 private_styleguide_folder   U m    ��
�� 
TEXT��  ��  ��  ��   O m     V V � W W  u p d a t e��  ��   L o      ���� $0  private_styleguide_update_folder   J  X Y X l     �� Z [��   Z 8 2 get path to /myfolder/private/styleguide/template    [ � \ \ d   g e t   p a t h   t o   / m y f o l d e r / p r i v a t e / s t y l e g u i d e / t e m p l a t e Y  ] ^ ] r     ) _ ` _ l    ' a���� a b     ' b c b l    % d���� d n     % e f e 1   # %��
�� 
psxp f l    # g���� g c     # h i h o     !���� 0 private_styleguide_folder   i m   ! "��
�� 
TEXT��  ��  ��  ��   c m   % & j j � k k  t e m p l a t e��  ��   ` o      ���� &0 "private_styleguide_template_folder   ^  l m l l  * *�� n o��   n 4 . get path to /myfolder/private/styleguide/user    o � p p \   g e t   p a t h   t o   / m y f o l d e r / p r i v a t e / s t y l e g u i d e / u s e r m  q r q r   * 3 s t s l  * 1 u���� u b   * 1 v w v l  * / x���� x n   * / y z y 1   - /��
�� 
psxp z l  * - {���� { c   * - | } | o   * +���� 0 private_styleguide_folder   } m   + ,��
�� 
TEXT��  ��  ��  ��   w m   / 0 ~ ~ �    u s e r��  ��   t o      ���� "0 private_styleguide_user_folder   r  � � � l  4 4�� � ���   � 6 0 get path to structured .plist (XML) config file    � � � � `   g e t   p a t h   t o   s t r u c t u r e d   . p l i s t   ( X M L )   c o n f i g   f i l e �  � � � r   4 9 � � � l  4 7 ����� � b   4 7 � � � o   4 5���� "0 private_styleguide_user_folder   � m   5 6 � � � � �  / c o n f i g . p l i s t��  ��   � o      ���� 0 config_file   �  � � � l  : :�� � ���   � + % read variable values out config file    � � � � J   r e a d   v a r i a b l e   v a l u e s   o u t   c o n f i g   f i l e �  � � � O   : � � � � O   @ � � � � O   I � � � � k   Q � � �  � � � r   Q a � � � n   Q ] � � � 1   Y ]��
�� 
valL � 4   Q Y�� �
�� 
plii � m   U X � � � � �  k s s _ n o d e _ f o l d e r � o      ���� 0 kss_node_folder   �  � � � r   b r � � � n   b n � � � 1   j n��
�� 
valL � 4   b j�� �
�� 
plii � m   f i � � � � � * p r o j e c t _ s t y l e s _ f o l d e r � o      ���� 0 public_styles_folder   �  ��� � r   s � � � � n   s  � � � 1   { ��
�� 
valL � 4   s {�� �
�� 
plii � m   w z � � � � � 2 p r o j e c t _ s t y l e g u i d e _ f o l d e r � o      ���� 0 public_styleguide_folder  ��   � 1   I N��
�� 
pcnt � 4   @ F�� �
�� 
plif � o   D E���� 0 config_file   � m   : = � ��                                                                                  sevs  alis    �  Macintosh HD               �A��H+     <System Events.app                                                ��� �        ����  	                CoreServices    �@��      � PB       <   /   .  =Macintosh HD:System: Library: CoreServices: System Events.app   $  S y s t e m   E v e n t s . a p p    M a c i n t o s h   H D  -System/Library/CoreServices/System Events.app   / ��   �  ��� � e   � � � � J   � � � �  � � � o   � ����� 0 kss_node_folder   �  � � � o   � ����� 0 public_styles_folder   �  ��� � o   � ����� 0 public_styleguide_folder  ��  ��   ' m      � ��                                                                                  MACS  alis    t  Macintosh HD               �A��H+     <
Finder.app                                                       ���)Uw        ����  	                CoreServices    �@��      �(��       <   /   .  6Macintosh HD:System: Library: CoreServices: Finder.app   
 F i n d e r . a p p    M a c i n t o s h   H D  &System/Library/CoreServices/Finder.app  / ��  ��  ��   $  � � � l  �z ����� � O   �z � � � k   �y � �  � � � l  � ��� � ���   � � � activate -- removed as brings window to the front; you can tell whether script is running because a spinning cog appears in the toolbar at the top of the page.	    � � � �B   a c t i v a t e   - -   r e m o v e d   a s   b r i n g s   w i n d o w   t o   t h e   f r o n t ;   y o u   c a n   t e l l   w h e t h e r   s c r i p t   i s   r u n n i n g   b e c a u s e   a   s p i n n i n g   c o g   a p p e a r s   i n   t h e   t o o l b a r   a t   t h e   t o p   o f   t h e   p a g e . 	 �  � � � l  � ��� � ���   �   Set KSS paths    � � � �    S e t   K S S   p a t h s �  � � � r   � � � � � o   � ����� 0 public_styles_folder   � o      ���� 0 kss_source_folder   �  � � � r   � � � � � o   � ����� 0 public_styleguide_folder   � o      ���� 0 kss_output_folder   �  � � � r   � � � � � o   � ����� &0 "private_styleguide_template_folder   � o      ���� 0 kss_template_folder   �  � � � r   � � � � � l  � � ����� � b   � � � � � o   � ����� 0 kss_template_folder   � m   � � � � � � �  / t e m p l a t e��  ��   � o      ����  0 kss_template_template_folder   �  � � � r   � � � � � l  � � ����� � b   � � � � � o   � ����� 0 kss_template_folder   � m   � � � � � � �  / g e n e r a t e d��  ��   � o      ���� !0 kss_template_generated_folder   �  � � � l  � ��� � ���   � N H Copy styleguide.md from /myfolder/private/template/public -> CSS folder    � � � � �   C o p y   s t y l e g u i d e . m d   f r o m   / m y f o l d e r / p r i v a t e / t e m p l a t e / p u b l i c   - >   C S S   f o l d e r �  � � � I  � ����� �
�� .coredoscnull��� ��� ctxt��   � �� ���
�� 
cmnd � b   � � � � � b   � � � � � b   � � � � � m   � � � � � � �  c p   � o   � �����  0 kss_template_template_folder   � m   � �   � , / p u b l i c / s t y l e g u i d e . m d   � o   � ����� 0 kss_source_folder  ��   �  l  � �����   I C Copy populated 'template' folder over, removing what's there first    � �   C o p y   p o p u l a t e d   ' t e m p l a t e '   f o l d e r   o v e r ,   r e m o v i n g   w h a t ' s   t h e r e   f i r s t  I  � �����	
�� .coredoscnull��� ��� ctxt��  	 ��
��
�� 
cmnd
 b   � � b   � � m   � � �  r m   - r f   / o   � ����� 0 kss_output_folder   m   � � �  / t e m p l a t e��    I  �����
�� .coredoscnull��� ��� ctxt��   ����
�� 
cmnd b   � b   � b   � � m   � � �  c p   - R   o   � �����  0 kss_template_template_folder   m   � �      o  ���� 0 kss_output_folder  ��   !"! l ��#$��  # ) # Copy empty 'generated' folder over   $ �%% F   C o p y   e m p t y   ' g e n e r a t e d '   f o l d e r   o v e r" &'& I ����(
�� .coredoscnull��� ��� ctxt��  ( ��)��
�� 
cmnd) b  *+* b  ,-, m  .. �//  r m   - r f   /- o  ���� 0 kss_output_folder  + m  00 �11  / g e n e r a t e d��  ' 232 I  7����4
�� .coredoscnull��� ��� ctxt��  4 ��5��
�� 
cmnd5 b  $3676 b  $/898 b  $+:;: m  $'<< �==  c p   - R  ; o  '*���� !0 kss_template_generated_folder  9 m  +.>> �??   7 o  /2�� 0 kss_output_folder  ��  3 @A@ l 88�~BC�~  B = 7 set the target path for the generated style guide HTML   C �DD n   s e t   t h e   t a r g e t   p a t h   f o r   t h e   g e n e r a t e d   s t y l e   g u i d e   H T M LA EFE r  8CGHG l 8?I�}�|I b  8?JKJ o  8;�{�{ 0 kss_output_folder  K m  ;>LL �MM  / g e n e r a t e d�}  �|  H o      �z�z 0 kss_output_source_folder  F NON l DD�yPQ�y  P   Start KSS node   Q �RR    S t a r t   K S S   n o d eO STS I DW�x�wU
�x .coredoscnull��� ��� ctxt�w  U �vV�u
�v 
cmndV b  HSWXW b  HOYZY m  HK[[ �\\  c d  Z o  KN�t�t 0 kss_node_folder  X m  OR]] �^^ & ;   k s s - n o d e   i n d e x . j s�u  T _`_ l XX�sab�s  a #  Regenerate the style guide		   b �cc :   R e g e n e r a t e   t h e   s t y l e   g u i d e 	 	` ded I Xw�r�qf
�r .coredoscnull��� ��� ctxt�q  f �pg�o
�p 
cmndg b  \shih b  \ojkj b  \klml b  \gnon b  \cpqp m  \_rr �ss  k s s - n o d e  q o  _b�n�n 0 kss_source_folder  o m  cftt �uu   m o  gj�m�m 0 kss_output_source_folder  k m  knvv �ww    - - t e m p l a t e  i o  or�l�l  0 kss_template_template_folder  �o  e xyx l xx�kz{�k  z   wait N seconds   { �||    w a i t   N   s e c o n d sy }~} l xx�j��j    delay 5   � ���  d e l a y   5~ ��� l xx�i���i  � !  close all terminal windows   � ��� 6   c l o s e   a l l   t e r m i n a l   w i n d o w s� ��� l xx�h���h  �  close every window   � ��� $ c l o s e   e v e r y   w i n d o w� ��� l xx�g���g  �   quit Terminal   � ���    q u i t   T e r m i n a l� ��f� l xx�e���e  � 
 quit   � ���  q u i t�f   � m   � ����                                                                                      @ alis    l  Macintosh HD               �A��H+     \Terminal.app                                                      � ��        ����  	                	Utilities     �@��      � =       \   [  2Macintosh HD:Applications: Utilities: Terminal.app    T e r m i n a l . a p p    M a c i n t o s h   H D  #Applications/Utilities/Terminal.app   / ��  ��  ��   � ��d� l     �c���c  �  end run   � ���  e n d   r u n�d       �b������������������b  � �a�`�_�^�]�\�[�Z�Y�X�W�V�U�T�S�R
�a .aevtoappnull  �   � ****�` 0 automator_app_path  �_ 0 private_styleguide_folder  �^ $0  private_styleguide_update_folder  �] &0 "private_styleguide_template_folder  �\ "0 private_styleguide_user_folder  �[ 0 config_file  �Z 0 kss_node_folder  �Y 0 public_styles_folder  �X 0 public_styleguide_folder  �W 0 kss_source_folder  �V 0 kss_output_folder  �U 0 kss_template_folder  �T  0 kss_template_template_folder  �S !0 kss_template_generated_folder  �R 0 kss_output_source_folder  � �Q��P�O���N
�Q .aevtoappnull  �   � ****� k    z��  #��  ��M�M  �P  �O  �  � 6 ��L�K�J�I�H�G�F V�E j�D ~�C ��B ��A�@�? ��>�= ��< ��;��:�9�8 ��7 ��6�5 � �4.0<>L�3[]rtv
�L .earsffdralis        afdr�K 0 automator_app_path  
�J 
ctnr
�I 
alis�H 0 private_styleguide_folder  
�G 
TEXT
�F 
psxp�E $0  private_styleguide_update_folder  �D &0 "private_styleguide_template_folder  �C "0 private_styleguide_user_folder  �B 0 config_file  
�A 
plif
�@ 
pcnt
�? 
plii
�> 
valL�= 0 kss_node_folder  �< 0 public_styles_folder  �; 0 public_styleguide_folder  �: 0 kss_source_folder  �9 0 kss_output_folder  �8 0 kss_template_folder  �7  0 kss_template_template_folder  �6 !0 kss_template_generated_folder  
�5 
cmnd
�4 .coredoscnull��� ��� ctxt�3 0 kss_output_source_folder  �N{� �)j E�O��,�,�&E�O��&�,�%E�O��&�,�%E�O��&�,�%E�O��%E�Oa  G*a �/ =*a , 4*a a /a ,E` O*a a /a ,E` O*a a /a ,E` UUUO_ _ _ mvUOa  �_ E` O_ E` O�E` O_ a %E`  O_ a !%E` "O*a #a $_  %a %%_ %l &O*a #a '_ %a (%l &O*a #a )_  %a *%_ %l &O*a #a +_ %a ,%l &O*a #a -_ "%a .%_ %l &O_ a /%E` 0O*a #a 1_ %a 2%l &O*a #a 3_ %a 4%_ 0%a 5%_  %l &OPU�,alis    (   Macintosh HD               �A��H+   �*(regenerate-styleguide.scpt                                      �����7osasToyS����  	                update    �@��      ���g      �*( ��p ��� x@Z m _ � ;  ��  xMacintosh HD:Users: Dan: github: kss-node: demo-dotherightthing: private: styleguide: update: regenerate-styleguide.scpt  6  r e g e n e r a t e - s t y l e g u i d e . s c p t    M a c i n t o s h   H D  cUsers/Dan/github/kss-node/demo-dotherightthing/private/styleguide/update/regenerate-styleguide.scpt   /    
��  ��alis    �  Macintosh HD               �A��H+   ���
styleguide                                                      ��p��w�        ����  	                private     �@��      ����     ��� x@Z m _ � ;  ��  TMacintosh HD:Users: Dan: github: kss-node: demo-dotherightthing: private: styleguide   
 s t y l e g u i d e    M a c i n t o s h   H D  AUsers/Dan/github/kss-node/demo-dotherightthing/private/styleguide   /    
��  � ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / u p d a t e� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / t e m p l a t e� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / u s e r� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / u s e r / c o n f i g . p l i s t� ��� 4 / U s e r s / D a n / g i t h u b / k s s - n o d e� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p u b l i c / d e m o - s t y l e s� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p u b l i c / s t y l e g u i d e� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / t e m p l a t e / t e m p l a t e� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p r i v a t e / s t y l e g u i d e / t e m p l a t e / g e n e r a t e d� ��� � / U s e r s / D a n / g i t h u b / k s s - n o d e / d e m o - d o t h e r i g h t t h i n g / p u b l i c / s t y l e g u i d e / g e n e r a t e d ascr  ��ޭ