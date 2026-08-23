# Deploying Soltana Pro Max

## Before deploying

1. Add only verified business information in [src/data/restaurant.js](src/data/restaurant.js): Instagram, Facebook, the exact Google Maps listing, and opening hours.
2. Test the production build locally:

   ```bash
   npm install
   npm run build
   npm run preview
   ```

3. Do **not** add prices unless they are confirmed by Soltana Pro Max.

## Put the project on GitHub

If this folder is not already a Git repository, run the following from the project root:

```bash
git init
git add .
git commit -m "Initial Soltana Pro Max website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/soltana-pro-max.git
git push -u origin main
```

Create the empty `soltana-pro-max` repository on GitHub before the `git remote add origin` command. Do not create it with a README, `.gitignore`, or licence during this flow, because those files already exist locally.

## Deploy with Vercel

For a static Vite website, the easiest method is connecting the GitHub repository:

1. Sign in at [Vercel](https://vercel.com/) with GitHub.
2. Select **Add New → Project** and import the `soltana-pro-max` repository.
3. Vercel should detect **Vite** automatically. Confirm these settings:

   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

4. Click **Deploy**.
5. Every push to `main` creates a production deployment; pushes to other branches create preview deployments.

Vercel automatically provides a temporary `*.vercel.app` address with HTTPS.

### Important: free-plan use

Vercel’s free Hobby plan is for personal, non-commercial use. It is appropriate for a student portfolio, prototype, or private review of this project; an official restaurant site is commercial and should use a Vercel Pro plan or a hosting provider whose free-plan terms allow commercial business sites. Check Vercel’s terms before making the official site public, since plan conditions can change.

## Add a custom domain in Vercel

After you own a domain:

1. In Vercel, open the project → **Settings → Domains**.
2. Enter your domain, for example `soltanapromax.tn` or `soltanapromax.me`.
3. Vercel will show the exact DNS record(s) required.
4. In the domain registrar’s DNS dashboard, copy those records exactly. Usually this is an `A` record for the root domain and a `CNAME` for `www`, but use the records Vercel displays rather than guessing.
5. Wait for DNS verification, then set the preferred domain as the production domain.

DNS changes can take from a few minutes to 48 hours to propagate. Vercel provisions HTTPS automatically after verification.

## Get a domain through the GitHub Student Developer Pack

1. Apply for GitHub Education at [education.github.com/pack/join](https://education.github.com/pack/join) using your verified student identity or academic email.
2. Once approved, open the [GitHub Student Developer Pack](https://education.github.com/pack/).
3. Look at the current domain offers. At the time this guide was written, the Pack lists:

   - **Namecheap:** one year of a `.me` domain registration.
   - **Name.com:** one selected free domain from eligible extensions.
   - **.TECH:** one standard `.tech` domain for one year.

4. Redeem one offer through the provider linked from the Pack. The provider will ask you to create an account and complete its own redemption flow.
5. Register a name that matches the restaurant and is easy to type. Check trademark and local naming requirements before committing.
6. Return to the Vercel domain steps above and add the domain’s DNS records at that provider.

The domain offers, eligible extensions, renewal prices, and student-verification conditions can change. Confirm the live offer and renewal cost on the GitHub Student Pack and the registrar before registering. The initial year may be free, but renewal is commonly paid.

## Useful official references

- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Deploying a GitHub repository with Vercel](https://vercel.com/docs/git/vercel-for-github)
- [Setting up a Vercel custom domain](https://vercel.com/docs/domains/set-up-custom-domain)
- [Vercel Hobby plan and limits](https://vercel.com/docs/plans/hobby)
- [Apply for GitHub Education](https://docs.github.com/en/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student)
- [GitHub Student Developer Pack](https://education.github.com/pack/)
