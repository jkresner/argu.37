
- - -  
*---- Begin forward ----*  
*From* dot man
ᐧ · • • • · …


GFM line break behaviour - trailing spaces are not required.

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternate H1 + H2 underline-ish style:

Alt-H1
======

Alt-H2
------

<em>phasis               *asterisks*       or   _underscores_
<strong> emphasis        **asterisks**     or   __underscores__
<strong><em>phasis       ***asterisks***   or   *__underscores__*.

Strikethrough        two tildes                 ~~Scratch this.~~


1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅Can indent paragraphs in list items. Notice blank line above, and leading spaces (at least one - three here aligns the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[inline link](https://regexr.com/)
[inline link w title](https://ocr.space/ "A better on-zline OC service")

[reference-style link][Arbitrary case-insensitive reference text]
[relative reference to repo file](../blob/master/LICENSE)

[number for reference link definitions][1]

Or use the [LINK TEXT ITself].

URLs and URLs in angle brackets will automatically get turned into links.
https://highlightjs.org/ or <http://lesscss.org/features/> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[LINK TEXT ITself]: http://www.reddit.com


Inline-style:       ![alt text](/common/images/icon48.png "Logo Title Text 1")
Reference-style:    ![alt text][logo]

[logo]: /common/images/icon48.png "Logo Title Text 2"

[![IMG ALT TXT](//img.youtube.com/vi/V/0.jpg)](www.youtube.com/watch?v=V)


Inline `code` has `back-ticks around`

```java
var s = "JavaScript syntax highlighting";
alert(s);
```

```
No language indicated, so no syntax highlighting. <b>tag</b>.
```

```python
s = "Python syntax highlighting"
print s
```



| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Colons used to align columns.
At least 3 dashes separating each header cell. 

Tables        | Are           | Cool  
------------- |:-------------:| -----:
col 3 is      | right-aligned | $1600 
col 2 is      | centered      |   $12 
zebra stripes | are neat      |    $1 


Outer pipes (|) are optional
you don't raw Markdown line up prettily. 
You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


Three or more...

---  Hyphens
***  Asterisks
___  Underscores