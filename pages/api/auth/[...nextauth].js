import NextAuth from 'next-auth';
import GoogleProvider from'next-auth/providers/google';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "977689590500-ssep6bulk7ju3tadu6p2kuglj596hcid.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
})