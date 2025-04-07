
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Trash2, Plus, Package } from 'lucide-react';
import { products } from '@/lib/productData';
import { useAuth } from '@/lib/auth';

// Fake orders data
const orders = [
  { id: 'ORD-123456', customer: 'John Doe', date: '2023-09-12', total: 347, status: 'Delivered' },
  { id: 'ORD-123457', customer: 'Jane Smith', date: '2023-09-13', total: 124, status: 'Processing' },
  { id: 'ORD-123458', customer: 'Bob Johnson', date: '2023-09-14', total: 245, status: 'Shipped' },
  { id: 'ORD-123459', customer: 'Alice Brown', date: '2023-09-15', total: 89, status: 'Processing' },
  { id: 'ORD-123460', customer: 'Charlie Davis', date: '2023-09-16', total: 432, status: 'Pending' },
];

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  const [productList, setProductList] = useState([...products]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Redirect if not authenticated or not admin
  React.useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, navigate]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = productList.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDeleteProduct = (id: number) => {
    setProductList(prev => prev.filter(product => product.id !== id));
  };
  
  if (!user || !isAdmin) {
    return null; // Prevent rendering while redirecting
  }
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <div>
            <span className="text-sm text-muted-foreground mr-2">
              Logged in as Admin
            </span>
          </div>
        </div>
        
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <div className="mb-6 flex justify-between">
              <Input
                placeholder="Search products..."
                className="max-w-sm"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map(product => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>
                        <div className="h-10 w-10 overflow-hidden rounded-md bg-secondary">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">${product.price}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="orders">
            <div className="mb-6 flex justify-between">
              <Input
                placeholder="Search orders..."
                className="max-w-sm"
              />
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">${order.total}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Package className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="users">
            <div className="p-8 text-center">
              <p className="text-muted-foreground">
                User management functionality will be implemented here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Admin;
