# angular-indeepth

I devide my learning process into 4 parts.
1. Read books and blogs. 
2. Watch video tutorials and lectures from prestigious programmer.
3. Modify the sample code.
4. Build real project.

The purpose of this repo lay in the last 2. 

Initialial I plan to use Yoman to scaffolding the project, 
later on I found it adds tooooo much overhead(open 'node_modules' of 'generator-angular' 
you will know what I means) what mean. Depend on too much package it not a good idea, 
since any one get update may crash your code.

__So Let's Do it The Hard Way!__

While writing the code, I'm trying to pump in everything (of course the good ones) I have learned.
- E.g. I choose gulp over grunt for build system not only for it enable me to use a more 
native way to write code, but also it's faster.
- E.g. Choose Git over SVN. Otherwise you won't see the repo here.
I don't understand why there are still lots of peopel use SVN.

The source for this module is in the
[angular-indeepth](https://github.com/taoning2014/angular-indeepth.git).
Please file issues and pull requests against that repo.

Last but not least, while the code base will continuous grow which I'm for sure. 
It's can act as a good starting point for everyone to learn angular. Clone it, will save you few hours
to set up the environment.

## follow the following step to set it up

Clone repository:
```
git clone https://github.com/taoning2014/angular-indeepth.git
```

Go into the project
```
cd angular-indeepth
```

Install frontend packages
```
bower install
```

Install node package
```
npm install
```

Bootup the server
```
gulp
```

Run `grunt` for building and `grunt serve` for preview

## Documentation

Documentation is to be done
[angular-indeepth docs site](https://web.njit.edu/~tn48/).

## License

The MIT License

Copyright (c) 2016 Tao Ning

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
