# Chess	Master

You	are	given	a	chess	board	with	size	 **RxC** 	( **R** 	rows	and	 **C** 	columns).	Each	square	(cell)	of	the
chessboard	is	identified	by	a	unique	coordinate	pair	-	a	letter	and	a	number.	The	vertical	 **columns**
of	squares	from	left	to	right	are	labeled	a,	b,	c	and	so	on.	The	horizontal	 **rows** 	of	squares	are
numbered	1,	2,	3	and	so	on,	starting	from	bottom	to	top.	Thus	each	square	has	a	unique
identification	of	letter	followed	by	number.

Example	of	board	with	size	5x8	is	given	in	the	picture.

Moves	are	given	by	two	square	(cell)	identifications	separated	by	a	single	space.

Examples:	 **“a1	e3”,	“d1	f2”,	“h5	h1”,	“a1	z9”** ,	etc.

All	given	moves	will	be	in	this	format	and	 **in	the	range** 	of	the	board.	Also	you	are	given	3	types	of
chess	pieces:	 **rook,	bishop** 	and	 **queen** 	as	explained	bellow.

Also	you	are	given	3	types	of	chess	pieces:	rook,	bishop	and	queen	as	explained	bellow.

**Pieces	do	not	capture	other	pieces.** 	Move	is	valid	if	the	figure	will	be	placed	on	an	empty	cell.

## Input

On	the	first	line	there	will	be	the	number	 **R	(number	of	rows)** .	On	the	second	line	there	will	be	the
number	 **C	(number	of	columns)** .	On	each	of	the	next	 **R	lines** 	there	will	be	 **C	characters**
representing	one	cell	(square)	of	the	board.	Empty	cell	are	denoted	with	 **dash	(‘-‘)** ,	Rooks	with	 **R** ,
Bishops	with	 **B** 	and	Queens	with	 **Q** .	See	examples	for	clarification.

On	the	next	line	there	will	be	the	 **number	T** 	representing	the	number	of	moves	to	be	checked	for
validity.	At	each	of	the	next	 **T	lines** 	there	will	be	a	move.	All	moves	will	be	in	the	range	of	the	board.

The	input	data	will	always	be	valid	and	in	the	format	described.	There	is	no	need	to	check	it
explicitly

## Output

For	each	of	the	given	moves	output	either	 **yes** 	or	 **no** 	whether	the	move	is	valid	or	not.	Invalid
moves	are	those	which	are	not	possible	because	of	the	given	restrictions.	See	examples	for
clarification.

## Constraints

* R 	will	be	between	 1 	and	 9 ,	inclusive.
* C 	will	be	between	 1 	and	 26 ,	inclusive.
* T 	will	be	between	 5 	and	 12 ,	inclusive.
* The	board	will	contain	only	 -,	R,	B	or	Q 	characters
* The	list	of	moves	will	contain	only	strings	with	5	characters	in	the	format	described	above.
* Some	of	the	test	cases	are	designed	to	test	only	specific	invalid	move	types,	so	partial	solutions
may	also	earn	points

## Sample	tests

### Input

```
3
4
--R-
B--B
Q--Q
12
d1	b
a1	a
c3	b
a1	c
a1	b
a1	c
a2	b
d2	c
b1	b
c3	b
a2	a
d1	d
```
### Output

```
yes
no
no
yes
yes
no
yes
yes
no
no
no
no
```

### Explanation


* Do	not	output	empty	lines!
* Valid	move	for	queen
* Non-empty	cell	on	the	path	(on	a2)
* Rooks	cannot	move	diagonally
* Valid	move	for	queen
* Valid	move	for	queen
* c3	is	not	a	vacant	square
* Valid	move	for	bishop
* Valid	move	for	bishop
* b1	is	an	empty	square	(no	piece	there)
* c3	to	b1	is	not	a	valid	move
* Bishops	move	only	diagonally
* Another	figure	in	between

### Input

```
5
5
Q---Q
-----
-B---
--R--
Q---Q
10
a1	a
a1	d
e1	b
a5	d
e5	b
b3	d
b3	a
b3	d
b3	a
c2	c
```
### Output


no
yes
yes
yes
yes
yes
yes
no
yes
yes


