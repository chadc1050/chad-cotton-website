# Chad Cotton Personal Website

Hey there! So it seems you have found your way to the source code for my personal website. This website was created to showcase 
my skills at designing, developing and deploying a website. As for the specifics, the website utilizes the
[Next JS Framework](https://nextjs.org/) coupled with the [Three JS Library](https://threejs.org/) to render three-dimensional objects 
on the page. The blog content is managed by [Hygraph](https://hygraph.com), a free headless CMS. This website is a working-progress, 
any feedback would be greatly appreciated, hope you enjoy, thanks!

### [Production Website](https://www.chadpcotton.dev)

## Environment Variables

| Name            | Description                                           |
|-----------------|-------------------------------------------------------|
| CMS_HOST        | The Hostname of the Headless CMS                      |
| CMS_TOKEN       | The API Token required to access headless CMS content |
| SENDGRID_TOKEN  | SendGrid API Token for Email Notifications            |
| RECIPIENT_EMAIL | Email address to receive Emil Notifications From      |

## Running the Website

To run the website locally, use npm to run a development environment.

```bash
npm run dev
```