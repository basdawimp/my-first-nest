import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('insertProduct', () => {
    it("returns the inserted product's ID", () => {
      const result = new Number();
      jest
        .spyOn(ProductsService, 'insertProduct')
        .mockImplementation(() => result);

      expect(service.insertProduct('a', 'a', 1)).toBe('1');
    });
  });
});
