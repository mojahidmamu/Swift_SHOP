 
1) What is the difference between null and undefined? 
=> i. undefined মানে হলো — কোনো ভ্যারিয়েবল declare করা হয়েছে কিন্তু তার কোনো value assign করা হয়নি। 
   ii. null মানে হলো — ইচ্ছা করে value খালি সেট করা হয়েছে।
সংক্ষেপে:
-> undefined → value দেওয়া হয়নি   
-> null → ইচ্ছা করে empty value দেওয়া হয়েছে

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
=> map() ব্যবহার করা হয় array এর প্রতিটি element এর উপর কাজ করে নতুন array return করার জন্য। 
  ->  forEach() array এর উপর loop চালায় কিন্তু কিছু return করে না।
3) What is the difference between == and ===?
=>      == (loose equality) → type check না করে compare করে
   ->   === (strict equality) → value + type দুইটাই check করে
4) What is the significance of async/await in fetching API data? 
=> async/await ব্যবহার করলে asynchronous code সহজভাবে লেখা যায় — synchronous এর মতো দেখতে।
    এটা Promise handle করা সহজ করে এবং code readable হয়।
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
=> Scope মানে — কোন ভ্যারিয়েবল কোথা থেকে access করা যাবে।
    i. Global Scope:    যে variable সব জায়গা থেকে ব্যবহার করা যায়।
    ii. Function Scope: function এর ভিতরে declare করলে শুধু function এর ভিতরে কাজ করে।
    iii. Block Scope:   {} block এর ভিতরে declare করলে শুধু ওই block এর ভিতরে কাজ করে (let, const)।
