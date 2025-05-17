export const logout = async () => {
  try {
    const response = await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    });
    
    if (response.ok) {
      // Clear any client-side auth state
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isAuthenticated');
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
}; 