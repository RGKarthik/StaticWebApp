# Azure Static Web Apps Deployment

## Project Structure for Deployment

This project is configured for deployment to Azure Static Web Apps with the following structure:

```
StaticWebApp/
├── index-standalone.html    # Main application file (standalone version)
├── index.html              # Server version (alternative)
├── countries.json          # Countries data (for server version)
├── staticwebapp.config.json # Azure Static Web Apps configuration
├── README.md               # This file
└── server.js              # Node.js server (for local development)
```

## Deployment Methods

### Method 1: Azure Static Web Apps (Recommended)

#### Prerequisites
- Azure account (free tier available)
- GitHub repository (already set up)

#### Steps:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Azure deployment"
   git push origin main
   ```

2. **Create Azure Static Web App**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the deployment**:
   - **Subscription**: Choose your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `countries-capitals-explorer` (or your preferred name)
   - **Hosting Plan**: Free (for development)
   - **Region**: Choose closest to your users
   - **Source**: GitHub
   - **GitHub Account**: Sign in and authorize
   - **Repository**: Select `StaticWebApp`
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/StaticWebApp` (path to your app)
   - **Output location**: `/StaticWebApp` (same as app location)

4. **Deploy**:
   - Click "Review + Create"
   - Click "Create"
   - Azure will automatically set up GitHub Actions for deployment

#### Expected Results:
- **URL**: You'll get a URL like `https://happy-rock-123abc.azurestaticapps.net`
- **Automatic deployments**: Every push to main branch triggers deployment
- **Free SSL**: HTTPS enabled automatically
- **Global CDN**: Fast loading worldwide

### Method 2: Azure App Service (Alternative)

If you prefer App Service:

1. **Create App Service**:
   - Choose "Web App" in Azure Portal
   - Runtime: Node.js (for server.js version)
   - Or use "Static Web App" option

2. **Deploy via GitHub Actions** or **Local Git**

### Method 3: Azure Blob Storage + CDN (Manual)

For manual deployment:
1. Create Storage Account
2. Enable Static Website hosting
3. Upload files to `$web` container
4. Configure Custom Domain (optional)

## Configuration Files

### staticwebapp.config.json
This file configures:
- Route handling (serves index-standalone.html as default)
- Cache headers
- MIME types for JSON files

## Post-Deployment Testing

After deployment, test these features:
- [ ] All 26 alphabet buttons visible
- [ ] Clicking letters shows filtered countries
- [ ] "Show All" button works
- [ ] Responsive design on mobile
- [ ] Keyboard navigation (A-Z keys, ESC)

## Custom Domain (Optional)

After deployment, you can:
1. Purchase a custom domain
2. Configure DNS records
3. Add custom domain in Azure Static Web Apps
4. SSL certificate is automatically provisioned

## Monitoring and Analytics

Azure Static Web Apps provides:
- Usage analytics
- Performance monitoring  
- Error tracking
- Deployment logs

## Cost Estimation

- **Free Tier**: 100GB bandwidth, 0.5GB storage
- **Standard Tier**: $9/month + usage
- **Custom domains**: Free
- **SSL certificates**: Free