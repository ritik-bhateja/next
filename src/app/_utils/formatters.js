// Private utility functions - not accessible via routing

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function generateBreadcrumbs(slug) {
  if (!slug || !Array.isArray(slug)) return [];
  
  return slug.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
    href: '/' + slug.slice(0, index + 1).join('/'),
    isLast: index === slug.length - 1
  }));
}