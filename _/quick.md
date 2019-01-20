Unicode fun

¶ ⁋ ♁ ♀ ⁁  
ⴵ ⧖ ⧗ Ⰹ Ⱌ Ⱐ ⴻ ⵐ ⵟ ⺅⼒ ⽉ ␣
₡ ℃ ℉ ⅂ ⅃ ⅄ ⅺ ↂ ↀ ∭ ∬ ∫ ∮ ≁ ≠ ␤
∩ ∪ Ω Φ Σ Ʊ Ʉ Π π ₸ ₽ ₿ ␢ ⌗ ⌥ ⋲
Ⅺ Ⅱ ⅱ ⁇ ⁈ ⁉ ‼ ‰ ‱ ᚠ ᜶ ⑊ ᚌ ᚍ ⁗ ᯾ ⌇
ꤶ ✓ ✔ ✖ ✗ ✩ ⌘ ⏍ ⊟ ⚐ ⊼ ⊽ ⏞ ⏟
― ⊣ ⊢ ⊥ ⊹ ⏊ ⏉⎾⎿ ⏀ ⏆ ⏇ ⏈ ⩱ ⩲ ᱿ 
⁑ • ᐧ · ‧ … ‥ … ╌ ╍ ┄ ┅ ⋯ ⁖ ∷ ⋮ ፧ ⵂ  ╏ ╎ ፨ ⁛ ⴾ ⋰ ⋱
↥ ↆ ↯ ↺ ↻ ↹ ⇶ ∔ ⟳ ⟲ ⵚ ⟰ ⟱ ⋘ ≪ ≫ ⋙ ‣ ⌃ ⌄
☷ ☰ ☶ ☴ ☵ ⚍ ⚎
◆ ◨ ■ ◧ ▏ ▎ ▍ ▌ ▋ ▊ ▉ █ ▇ ▆ ▅ ▄ ▃ ▂ ▁ 
⸮ ␦ ⑊ ⑂  ⸨ ⸩ ꯁ

- - -   
*---- Begin forward ----*  
*From* dot man

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


`SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace`


<!--...-->      Defines a comment
<!DOCTYPE>      Defines the document type
<a>             Defines a hyperlink
<abbr>          Defines an abbreviation or an acronym
<acronym>       Defines an acronym          Not supported in HTML5. Use <abbr> instead.
<address>       Defines contact information for the author/owner of a document
<applet>        Defines an embedded applet  Not supported in HTML5. Use <embed> or <object> instead.
<area>          Defines an area inside an image-map
<article>       Defines an article
<aside>         Defines content aside from the page content
<audio>         Defines sound content
<b>             Defines bold text
<base>          Specifies the base URL/target for all relative URLs in a document
<basefont>      Not supported in HTML5. Use CSS instead.
                Specifies a default color, size, and font for all text in a document
<bdi>           Isolates a part of text that might be formatted in a different direction from other text outside it
<bdo>           Overrides the current text direction
<big>           Not supported in HTML5. Use CSS instead.
                Defines big text
<blockquote>    Defines a section that is quoted from another source
<body>          Defines the document's body
<br>            Defines a single line break
<button>        Defines a clickable button
<canvas>        Used to draw graphics, on the fly, via scripting (usually JavaScript)
<caption>       Defines a table caption
<center>        Not supported in HTML5. Use CSS instead.
                Defines centered text
<cite>          Defines the title of a work
<code>          Defines a piece of computer code
<col>           Specifies column properties for each column within a <colgroup> element 
<colgroup>      Specifies a group of one or more columns in a table for formatting
<data>          Links the given content with a machine-readable translation
<datalist>      Specifies a list of pre-defined options for input controls
<dd>            Defines a description/value of a term in a description list
<del>           Defines text that has been deleted from a document
<details>       Defines additional details that the user can view or hide
<dfn>           Represents the defining instance of a term
<dialog>        Defines a dialog box or window
<dir>           Not supported in HTML5. Use <ul> instead.
                Defines a directory list
<div>           Defines a section in a document
<dl>            Defines a description list
<dt>            Defines a term/name in a description list
<em>            Defines emphasized text 
<embed>         Defines a container for an external (non-HTML) application
<fieldset>      Groups related elements in a form
<figcaption>    Defines a caption for a <figure> element
<figure>        Specifies self-contained content
<font>          Not supported in HTML5. Use CSS instead.
                Defines font, color, and size for text
<footer>        Defines a footer for a document or section
<form>          Defines an HTML form for user input
<frame>         Not supported in HTML5.
                Defines a window (a frame) in a frameset
<frameset>      Not supported in HTML5.
                Defines a set of frames
<h1> to <h6>    Defines HTML headings
<head>          Defines information about the document
<header>        Defines a header for a document or section
<hr>            Defines a thematic change in the content
<html>          Defines the root of an HTML document
<i>             Defines a part of text in an alternate voice or mood
<iframe>        Defines an inline frame
<img>           Defines an image
<input>         Defines an input control
<ins>           Defines a text that has been inserted into a document
<kbd>           Defines keyboard input
<label>         Defines a label for an <input> element
<legend>        Defines a caption for a <fieldset> element
<li>            Defines a list item
<link>          Defines the relationship between a document and an external resource (most used to link to style sheets)
<main>          Specifies the main content of a document
<map>           Defines a client-side image-map
<mark>          Defines marked/highlighted text
<meta>          Defines metadata about an HTML document
<meter>         Defines a scalar measurement within a known range (a gauge)
<nav>           Defines navigation links
<noframes>      Not supported in HTML5.
                Defines an alternate content for users that do not support frames
<noscript>      Defines an alternate content for users that do not support client-side scripts
<object>        Defines an embedded object
<ol>            Defines an ordered list
<optgroup>      Defines a group of related options in a drop-down list
<option>        Defines an option in a drop-down list
<output>        Defines the result of a calculation
<p>             Defines a paragraph
<param>         Defines a parameter for an object
<picture>       Defines a container for multiple image resources
<pre>           Defines preformatted text
<progress>      Represents the progress of a task
<q>             Defines a short quotation
<rp>            Defines what to show in browsers that do not support ruby annotations
<rt>            Defines an explanation/pronunciation of characters (for East Asian typography)
<ruby>          Defines a ruby annotation (for East Asian typography)
<s>             Defines text that is no longer correct
<samp>          Defines sample output from a computer program
script>         Defines a client-side script
<section>       Defines a section in a doc
<select>        Defines a drop-down list
<small>         Defines smaller text
<source>        Defines multiple media resources for media elements (<video> and <audio>)
<span>          Defines a section in a document
<strike>        Not supported in HTML5. Use <del> or <s> instead.
                Defines strikethrough text
<strong>        Defines important text
<style>         Defines style information for a document
<sub>           Defines subscripted text
<summary>       Defines a visible heading for a <details> element
<sup>           Defines superscripted text
<svg>           Defines a container for SVG graphics
<table>         Defines a table
<tbody>         Groups the body content in a table
<td>            Defines a cell in a table
<template>      Defines a template
<textarea>      Defines a multiline input control (text area)
<tfoot>         Groups the footer content in a table
<th>            Defines a header cell in a table
<thead>         Groups the header content in a table
<time>          Defines a date/time
<title>         Defines a title for the document
<tr>            Defines a row in a table
<track>         Defines text tracks for media elements (<video> and <audio>)
<tt>            Not supported in HTML5. Use CSS instead.
                Defines teletype text
<u>             Defines text that should be stylistically different from normal text
<ul>            Defines an unordered list
<var>           Defines a variable
<video>         Defines a video or movie
<wbr>           Defines a possible line-break